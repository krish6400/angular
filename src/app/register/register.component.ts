
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name : any
  email : any
  password : any
  contact : any
  address : any
  user_type : any

  constructor(private service : ProductService, private router : Router) {
    this.name = "";
    this.email = "";
    this.password = "";
    this.contact = "";
    this.address = "";
    this.user_type = "";
   }

  ngOnInit(): void {
  }

  register(registerForm : any) {
    this.service.register(registerForm).subscribe((data:any) => {console.log(data)}),
    this.service.showSuccess("Registration Successfull!!"),
    this.router.navigate(['login'])
  }

 
}
