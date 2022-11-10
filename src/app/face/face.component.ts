import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent implements OnInit {

  products : any

  constructor(private service : ProductService) { 

  }

  ngOnInit(): void {
    this.service.getProducts().subscribe((data : any) => {this.products = data, console.log(data)});
  }

}
