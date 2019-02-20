import { Component, OnInit } from "@angular/core";
import { IEClients } from "src/app/modules/Client";
import { Router } from "@angular/router";
import { ClientsService } from "../../services/clients";
// import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.scss"]
})
export class AddClientComponent implements OnInit {
  client: IEClients = {
    fristName: "",
    lastName: "",
    email: "",
    phone: null,
    balance: null
  };
  constructor(
    private clientService: ClientsService,
    private router: Router
  ) // , private flahMessage:FlashMessagesService
  {}

  ngOnInit() {}
  addClient({ value, valid }: { value: IEClients; valid: boolean }) {
    if (!valid) {
      console.log("not valid");
    } else {
      this.clientService.addClient(value);
      this.router.navigate([""]);
    }
  }
}
