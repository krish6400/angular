import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginid : any
  password : any
  temp :any
  allvar : any
  logform : any
  user:any
  users:any

  constructor(private service : ProductService, private router : Router) { 
    this.loginid = "";
    this.password = "";
  }

  ngOnInit(): void {
    // this.service.login().subscribe((result:any)=>{this.allvar=result,console.log(this.allvar)})
  }

  // loginFormSubmit(loginForm : any) {
  //   console.log(loginForm);
  // }
  login(loginForm  : any) {

    this.service.userLogin(loginForm).then((data : any) => {this.user = data});
    this.users.forEach((user:any)=>{
    if(loginForm.email === this.user.email &&  loginForm.password === this.user.password) {
      alert('success')
      this.service.setUserLoggedIn();
      this.router.navigate(['welcome'])
    }
  });
//     console.log(loginForm)
    
//     this.temp=0;
//     console.log(this.allvar)
//     for(const i in this.allvar){
//       this.temp=this.temp+1;
//       if(this.allvar[i].email==loginForm.email&&this.allvar[i].password==loginForm.password){
//         this.logform=this.allvar[i];
//         this.temp=this.temp-1;
//         console.log('login successfull',this.logform)
//         this.service.setUserLoggedIn();
//         this.router.navigate(['welcome']);
//         break;
      }
   

      }
   
      // if( loginForm.email== 'gopi'&&loginForm.password== '1234'){
      //   this.router.navigate(['contact']);
      // }

      
      // if( loginForm.email== 'achyuth'&&loginForm.password== '1234'){
      //   this.router.navigate(['contact']);
      // }

      // if( loginForm.email== 'mounika'&&loginForm.password== '1234'){
      //   this.router.navigate(['contact']);
      // }

      
      // if( loginForm.email== 'ramesh'&&loginForm.password== '1234'){
      //   this.router.navigate(['contact']);
      // }

      // if( loginForm.email== 'bindu'&&loginForm.password== '1234'){
      //   this.router.navigate(['contact']);
      // }

      

  




