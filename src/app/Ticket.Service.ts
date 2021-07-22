

import { Ticket } from './Model/Ticket';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
})

export class TicketService {

    constructor(private http: HttpClient) { }






    save(createinfo: any) {
        return this.http.post("http://127.0.0.1:8000/api/ticket", createinfo);
    }
    show() {

        return this.http.get<any[]>("http://127.0.0.1:8000/api/tickets");
    }

        getTicketByd(id:number):Observable<Ticket>{

        return this.http.get<Ticket>("http://127.0.0.1:8000/api/ticket/"+id);
        }


    updateTicket(id: number, ticket: Ticket): Observable<Object>{
        console.log(id,ticket);
        return this.http.put("http://127.0.0.1:8000/api/ticket/"+id, ticket);
   

}
}
