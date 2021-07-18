import { Component, OnInit } from '@angular/core';
import { TicketService } from '../Ticket.Service';

@Component({
  selector: 'app-indexticket',
  templateUrl: './indexticket.component.html',
  styleUrls: ['./indexticket.component.css']
})
export class IndexticketComponent implements OnInit {

  tickets:any
  constructor(public ticketservice: TicketService) { }

  ngOnInit(): void {
    this.show()
  }
show(){

  this.ticketservice.show().subscribe((data)=>{
    console.log(data);
    this.tickets = data;
  });
}
}
