import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product.service';
import { IProduct } from '../../../../interface/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Corrected to `styleUrls`
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.Get_All_Products().subscribe(
      (data) => {
        // Xử lý phản hồi thành công
        this.products = data;
      },
      (error) => {
        // Xử lý lỗi
        console.error('Đã xảy ra lỗi:', error);
      }
    );
  }
}
