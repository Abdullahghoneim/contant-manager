import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AddClientComponent } from "./components/add-client/add-client.component";
import { ClientDetilsComponent } from './components/client-detils/client-detils.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "addClient", component: AddClientComponent }, 
  {path: 'client/:id', component: ClientDetilsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
