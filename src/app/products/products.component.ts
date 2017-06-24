import { Component, OnInit } from '@angular/core';
import {Product} from "../service/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product> = [{
    name: '코알라',
    price: 30000,
    img: '/img/Koala.jpg'
  }, {
    name: '해파리',
    price: 20000,
    img: '/img/Jellyfish.jpg'
  }];

  constructor() { }

  ngOnInit() {
  }

}
