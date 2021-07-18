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

  registerform:any;
  UserService:any;
  
  constructor(public ticketservice: TicketService, private router: Router, public formbuilder: FormBuilder,private route: ActivatedRoute) { 

  this.registerform = formbuilder.group({
  
    category: ["", [Validators.required]],
    subject: ["", [Validators.required]],
    description: ["", [Validators.required]],
    
  })
}
  
  ngOnInit(): void {
  }


  createt(){
    console.log(this.registerform.value);
    
    this.ticketservice.save(this.registerform.value).subscribe(res =>{
       this.router.navigate(['indexticket']) 
    },err => {
      
    })
  
  }
}