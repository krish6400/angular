import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-faceproducts',
  templateUrl: './faceproducts.component.html',
  styleUrls: ['./faceproducts.component.css']
})
export class FaceproductsComponent implements OnInit {


  products : any

  constructor(private service : ProductService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((data : any) => {this.products = data, console.log(data)});
  }

}
