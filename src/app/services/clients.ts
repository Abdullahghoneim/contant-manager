import { Injectable } from "@angular/core";
import { IEClients } from "../modules/Client";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class ClientsService {
  clientsCollection: AngularFirestoreCollection<IEClients>;
  clients: Observable<IEClients[]>;

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

  getClient() {
    return this.clients;
  }
  addClient(client) {
    this.clientsCollection.add(client);
  }
}
