import { Component } from '@angular/core';
import { CategoryService } from '../../../category.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../product.service';
import { IProduct } from '../../../../interface/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: ActivatedRoute,
  ) { }
  categories: any[] = [];
  product: IProduct[] = []

  ngOnInit() {
    this.productService.Get_All_Products().subscribe(
      (data) => {
        // Xử lý phản hồi thành công
        this.product = data;
      },
      (error) => {
        // Xử lý lỗi
        console.error('Đã xảy ra lỗi:', error);
      }
    )
    this.categoryService.Get_All_Categories().subscribe(
      (data) => {
        this.categories = data;
      }
    )
  }
}
