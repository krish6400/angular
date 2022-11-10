import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // face(){
  //   this.router.navigate(['face']);
  // }
  // body() {
  //   this.router.navigate(['body']);
  // }
  // hair() {
  //   this.router.navigate(['hair']);
  // }
  // perfume() {
  //   this.router.navigate(['perfume']);
  // }
  // about() {
  //   this.router.navigate(['about']);
  // }
  // contact() {
  //   this.router.navigate(['contact']);
  // }
  // home() {
  //   this.router.navigate(['home'])
  // }
}
