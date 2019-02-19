import { Component, OnInit } from "@angular/core";
import { ClientsService } from "../../services/clients";
import { IEClients } from "src/app/modules/Client";
@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.scss"]
})
export class ClientsComponent implements OnInit {
  clients: IEClients[];
  totalOwed: number;
  constructor(private clientsService: ClientsService) {}

  ngOnInit() {
    this.clientsService.getClient().subscribe(clients => {
      this.clients = clients;
      console.log(this.clients);
    });
  }
  getTotalOwed() {
    let total = 0;
    for (let i = 0; i < this.clients.length; i++) {
      total += parseFloat(this.clients[i].balance);
    }
    this.totalOwed = total;
  }
}
