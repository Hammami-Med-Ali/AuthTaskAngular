import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateticketComponent } from './createticket/createticket.component';
import { AppRoutingModule } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexticketComponent } from './indexticket/indexticket.component';
import { EditticketComponent } from './editticket/editticket.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreateticketComponent,
    IndexticketComponent,
    EditticketComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
