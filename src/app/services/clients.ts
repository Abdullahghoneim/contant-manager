import { Injectable } from "@angular/core";
import { IEClients } from "../modules/Client";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
@Injectable()
export class ClientsService {
  clients: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.clients = this.db
      .list("clients")
      .snapshotChanges()
      .pipe(
        map(actions => {
          actions.map(a => ({ key: a.key, ...a.payload.val() }));
        })
      );
    console.log(this.clients);
  }
  getClient() {
    return this.clients;
  }
  addClient(client) {
    this.db.list("clients").push(client);
  }
}
