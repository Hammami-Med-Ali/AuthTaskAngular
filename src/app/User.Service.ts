

import { User } from './Model/User';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable({
    providedIn:'root'
})

export class UserService{
    
    constructor(private http:HttpClient){}
      
              
       



            login(logininfo: any){
         

         
                return this.http.post("http://127.0.0.1:8000/api/login", logininfo);   
            } 
            register(createinfo: any){
         

         
                return this.http.post("http://127.0.0.1:8000/api/register", createinfo);   
            } 
    }
