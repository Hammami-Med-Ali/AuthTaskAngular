import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../Ticket.Service';

@Component({
  selector: 'app-indexticket',
  templateUrl: './indexticket.component.html',
  styleUrls: ['./indexticket.component.css']
})
export class IndexticketComponent implements OnInit {

  tickets:any
 
  constructor(public ticketservice: TicketService, private router: Router, public formbuilder: FormBuilder,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.show()
  }
show(){

  this.ticketservice.show().subscribe((data)=>{
    console.log(data);
    this.tickets = data;
  });
}
updateTicket(id: number){
  this.router.navigate(['/editticket'], { queryParams: { id: id } });
}
}
