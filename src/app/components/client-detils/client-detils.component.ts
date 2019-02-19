import { Component, OnInit } from "@angular/core";
import { ClientsService } from "src/app/services/clients";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { IEClients } from "src/app/modules/Client";
@Component({
  selector: "app-client-detils",
  templateUrl: "./client-detils.component.html",
  styleUrls: ["./client-detils.component.scss"]
})
export class ClientDetilsComponent implements OnInit {
  id: string;
  client: IEClients;
  constructor(
    private clientService: ClientsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // get Client iD
    this.id = this.route.snapshot.params["id"];
    // get Client
    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
    });
  }
}
