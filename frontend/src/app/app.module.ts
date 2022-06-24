import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatNativeDateModule} from '@angular/material/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TicketdisComponent } from './ticketdis/ticketdis.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'form', component: FormComponent
  },
  {
    path: 'tickets', component: TicketdisComponent
  }
];
 
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TicketdisComponent
  ],
  imports: [
    MatNativeDateModule,
    FormsModule,
    MatSidenavModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
