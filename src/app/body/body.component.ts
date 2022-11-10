import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  body : any

  constructor(private service : ProductService) { }

  ngOnInit(): void {
    this.service.getBody().subscribe((data : any) => {this.body = data, console.log(data)});
  }

}
