import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
// import { FlashMessagesModule } from "angular2-flash-messages";
import { AppRoutingModule } from "./app-routing.module";
import { ClientsComponent } from "./components/clients/clients.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { AppComponent } from "./app.component";
import { AddClientComponent } from "./components/add-client/add-client.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ClientDetilsComponent } from "./components/client-detils/client-detils.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { ClientsService } from "./services/clients";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { EditClientComponent } from "./components/edit-client/edit-client.component";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ClientsComponent,
    SidebarComponent,
    AddClientComponent,
    ClientDetilsComponent,
    PageNotFoundComponent,
    EditClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
    // FlashMessagesModule
  ],
  providers: [ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
