import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../User.Service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform:any;
  UserService:any;
  
  constructor(public userservice: UserService, private router: Router, public formbuilder: FormBuilder,private route: ActivatedRoute) { 

  this.registerform = formbuilder.group({
  
    name: ["", [Validators.required, Validators.minLength(6),Validators.maxLength(40)]],
    email: ["", [Validators.required]],
    password: ["", [Validators.required]],
    
  })
}
  
  ngOnInit(): void {
  }


  registerf(){
    console.log(this.registerform.value);
    
    this.userservice.register(this.registerform.value).subscribe(res =>{
       this.router.navigate(['login']) 
    },err => {
      
    })
  
  }
}
