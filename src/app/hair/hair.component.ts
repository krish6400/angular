import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-hair',
  templateUrl: './hair.component.html',
  styleUrls: ['./hair.component.css']
})
export class HairComponent implements OnInit {

  hair : any
  constructor(private service : ProductService) { }

  ngOnInit(): void {
    this.service.getHair().subscribe((data : any) => {this.hair = data, console.log(data)});
  }

}
