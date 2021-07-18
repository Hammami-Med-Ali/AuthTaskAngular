import { UserService } from './../User.Service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginform: any;
  UserService: any;
  

  constructor(public userservice: UserService,private router: Router, private formbuilder: FormBuilder, private route: ActivatedRoute) {

    this.loginform = formbuilder.group({
  
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6),Validators.maxLength(15)]],
      
    })
   }

  ngOnInit(): void {
  }

  login() {

console.log("hello");
debugger;
    this.userservice.login(this.loginform.value).subscribe((res: any) => {
      

      if (res.message == 'Invalid credentials') {
      }

      else {
        this.router.navigate(['/register'])

        
      }
    });



  }


}
