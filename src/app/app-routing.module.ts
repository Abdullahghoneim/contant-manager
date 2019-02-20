import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AddClientComponent } from "./components/add-client/add-client.component";
import { ClientDetilsComponent } from './components/client-detils/client-detils.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "addClient", component: AddClientComponent }, 
  { path: 'client/:id', component: ClientDetilsComponent }, 
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
