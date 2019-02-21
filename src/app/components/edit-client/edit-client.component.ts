import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ClientsService } from "../../services/clients";
import { IEClients } from "src/app/modules/Client";
@Component({
  selector: "app-edit-client",
  templateUrl: "./edit-client.component.html",
  styleUrls: ["./edit-client.component.scss"]
})
export class EditClientComponent implements OnInit {
  id: string;
  client: IEClients = {
    fristName: "",
    lastName: "",
    balance: "",
    email: "",
    phone: 0
  };
  constructor(
    private clientService: ClientsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
      console.log(this.client);
    });
  }
  updateClient(client) {
    this.clientService.updateClient(client); 
    this.router.navigate(['/client/', this.id])
  }
}
