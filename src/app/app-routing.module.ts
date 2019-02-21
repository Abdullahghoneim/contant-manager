import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AddClientComponent } from "./components/add-client/add-client.component";
import { ClientDetilsComponent } from "./components/client-detils/client-detils.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { EditClientComponent } from "./components/edit-client/edit-client.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  // { path: "**", component: PageNotFoundComponent },
  { path: "addClient", component: AddClientComponent },
  { path: "client/:id", component: ClientDetilsComponent },
  { path: "editeClient/:id", component: EditClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
