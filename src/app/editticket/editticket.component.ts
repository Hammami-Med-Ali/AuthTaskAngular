import { Ticket } from './../Model/Ticket';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../Ticket.Service';

@Component({
  selector: 'app-editticket',
  templateUrl: './editticket.component.html',
  styleUrls: ['./editticket.component.css']
})
export class EditticketComponent implements OnInit {
  id:any;
  data:any;
  editform:any;
  UserService:any;
  activatedRoute: any;
  
  constructor(public ticketservice: TicketService, private router: Router, public formbuilder: FormBuilder,private route: ActivatedRoute) { 
 
  this.editform = formbuilder.group({
  
    category: ["", [Validators.required]],
    subject: ["", [Validators.required]],
    description: ["", [Validators.required]],
    
  })
}
  
ngOnInit() {
   this.id = this.activatedRoute.snapshot.params["id"];
  console.log(this.id);
  this.ticketservice.getItem(this.id).subscribe(response => {
    console.log(response);
    this.data = response;
    console.log(this.data);
    this.editform.patchValue(this.data) */
 
  }) 
}
update() {
  
  this.ticketservice.updateItem(this.id, this.editform.value).subscribe(response => {
    this.router.navigate(['indexticket']); 
   }) 
}

}