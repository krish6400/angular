import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-perfume',
  templateUrl: './perfume.component.html',
  styleUrls: ['./perfume.component.css']
})
export class PerfumeComponent implements OnInit {

  perfume : any
  constructor(private service : ProductService) { }

  ngOnInit(): void {
    this.service.getPerfume().subscribe((data : any) => {this.perfume = data, console.log(data)});
  }

}
