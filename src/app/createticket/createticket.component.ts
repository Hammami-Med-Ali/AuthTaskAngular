import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../Model/Ticket';
import { TicketService } from '../Ticket.Service';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.css']
})
export class CreateticketComponent implements OnInit {

  createformt:any;
  
  
  constructor(public ticketservice: TicketService, private router: Router, public formbuilder: FormBuilder,private route: ActivatedRoute) { 

  this.createformt = formbuilder.group({
    id: ["", [Validators.required]],
    category: ["", [Validators.required]],
    subject: ["", [Validators.required]],
    description: ["", [Validators.required]],
    
  })
}
  
  ngOnInit(): void {
  }


  createt(){
    console.log(this.createformt.value);
    
    this.ticketservice.save(this.createformt.value).subscribe(res =>{
       this.router.navigate(['login']) 
    },err => {
      
    })
  
  }
}