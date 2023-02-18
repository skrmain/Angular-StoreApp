import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'user-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  constructor(private productService: ProductService) {}

  products: any[] = [];

  ngOnInit() {
    this.productService.getProducts().subscribe((result: any) => {
      this.products = result.data;
    });
  }
}
