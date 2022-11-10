import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  isUserLogged : boolean;
  constructor(private httpClient : HttpClient, private toastr : ToastrService) {
     this.isUserLogged = false;
   }
   showSuccess(message : any){
    this.toastr.success(message)
  }

    showError(message : any){
  this.toastr.error(message)
  }

   getProducts() {
    return this.httpClient.get('getProducts');
   }
   getHair() {
    return this.httpClient.get('getHair');
   }
   getPerfume() {
    return this.httpClient.get('getPerfume')
   }
   getBody() {
    return this.httpClient.get('getBody')
   }
   register(user : any) {
    return this.httpClient.post('register', user)
   }
   login() {
    return this.httpClient.get('getUser')
   }
   hairRegister(hair :any){
    return this.httpClient.post('Hair_register',hair)
   }
   faceRegister(face : any) {
    return this.httpClient.post('product_register', face)
   }
   bodyProduct(body :any){
    return this.httpClient.post('Body_register',body)
   }
   perfumeRegister(perfume : any) {
    return this.httpClient.post('Perfume_register', perfume)
   }
   setUserLoggedIn(){
    this.isUserLogged=true;
  }
  setUserLoggedOut(){
    this.isUserLogged=false;
  }
  getUserLoggedIn(){
    return this.isUserLogged;
  }

  userLogin(user:any){
    return this.httpClient.get('login'+ user.email+'/'+user.password).toPromise();
  }

  
}
