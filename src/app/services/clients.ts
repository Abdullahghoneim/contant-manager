import { Injectable } from "@angular/core";
import { IEClients } from "../modules/Client";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class ClientsService {
  clientsCollection: AngularFirestoreCollection<IEClients>;
  clients: Observable<IEClients[]>;
  client: Observable<IEClients>;
  clientDoc: AngularFirestoreDocument<IEClients>;
  constructor(private db: AngularFirestore) {
    this.clientsCollection = this.db.collection<IEClients>("clients");
    this.clients = this.clientsCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as IEClients;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  getClients() {
    return this.clients;
  }
  getClient(id) {
    this.clientDoc = this.db.doc<IEClients>(`clients/${id}`);
    this.client = this.clientDoc.valueChanges();
    return this.client;
  }
  addClient(client) {
    this.clientsCollection.add(client);
  }
  updateClient(id, client) {
    this.clientDoc.update(client);
  }
}
