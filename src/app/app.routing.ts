import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
import { CreateticketComponent } from './createticket/createticket.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { IndexticketComponent } from './indexticket/indexticket.component';
import { EditticketComponent } from './editticket/editticket.component';

const routes: Routes = [
    {
        path: "login", component: LoginComponent
    },
    {
        path: "register", component: RegisterComponent
    },
    {
        path: "create", component: CreateticketComponent
    },
    {
        path: "editticket", component: EditticketComponent
    },
    {
        path: "indexticket", component: IndexticketComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule, BrowserModule],
    exports: [],
})
export class AppRoutingModule { }
