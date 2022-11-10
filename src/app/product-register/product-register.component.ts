import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent implements OnInit {

  category : any
product:any
  constructor(private service : ProductService, private router : Router) { }

  ngOnInit(): void {
  }

  registerProduct(productForm : any) {
    console.log(productForm);

    if (productForm.category === 'Hair') {
      alert('Category : Hair')
      this.service.hairRegister(productForm).subscribe((data:any)=>{this.product=data})
    } else if (productForm.category === 'Body') {
      alert('Category: Body');
      this.service.bodyProduct(productForm).subscribe((data:any)=>{this.product=data})
    } else if (productForm.category === 'Face') {
      alert('Category: Face');
      this.service.faceRegister(productForm).subscribe((data:any)=>{this.product=data})
    } else if (productForm.category === 'Perfume') {
      alert('Category: Perfume');
      this.service.perfumeRegister(productForm).subscribe((data:any)=>{this.product=data})
    } 

    // if(productForm.Hair === 'Hair') {
    //   
    // }
    // if(productForm.body === 'Body') {
    //   
    // }
    // if(productForm.face === 'Face') {
    //   
    // }
    // if(productForm.perfume === 'Perfume') {
    //   
    // }  
  }

}
