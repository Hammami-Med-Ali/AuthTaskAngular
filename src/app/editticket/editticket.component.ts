import { Ticket } from './../Model/Ticket';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../Ticket.Service';

@Component({
  selector: 'app-editticket',
  templateUrl: './editticket.component.html',
  styleUrls: ['./editticket.component.css']
})
export class EditticketComponent implements OnInit {
  editform:FormGroup;
  id : any;
  ticket:any;
  
 //ticket : Ticket = new Ticket();
  constructor( public ticketservice: TicketService, private router: Router, public formbuilder: FormBuilder,private route: ActivatedRoute) { 

    this.editform = formbuilder.group({
      id: ["", [Validators.required]],
      category: ["", [Validators.required]],
      subject: ["", [Validators.required]],
      description: ["", [Validators.required]],
      
    })
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams.id;
    console.log( this.route,'route');
    
    console.log(this.id);
    this.ticketservice.getTicketByd(this.id).subscribe(data => {
      this.ticket =data;
      console.log(this.ticket);
      this.editform.setValue(this.ticket);
    }, error => console.log(error));
  }
  
update()
{
  console.log(this.editform , 'edit form');
 
this.ticketservice.updateTicket(this.id, this.editform.value).subscribe( data =>{
  console.log(data);
  this.goToTicketList();
}
, error => console.log(error));
}

goToTicketList(){
this.router.navigate(['/indexticket']);
}
}
