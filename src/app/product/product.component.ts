import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../service/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

  getPrice() {
    return this.product.price.toLocaleString();
  }

}
