import { Component } from '@angular/core';
import { IProduct } from '../../../../interface/product';
import { ProductService } from '../../../product.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../category.service';
import { ICategory } from '../../../../interface/category';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: IProduct = {} as IProduct
  categories: ICategory = {} as ICategory;
  constructor(
    private productService: ProductService,
    private router: ActivatedRoute,
    private categoryService: CategoryService,
  ) { }
  productid = this.router.snapshot.params['id'];
  ngOnInit() {
    this.productService.Get_Products_By_ID(this.productid).subscribe(
      (data) => {
        // Xử lý phản hồi thành công
        this.product = data;
      },
      (error) => {
        // Xử lý lỗi
        console.error('Đã xảy ra lỗi:', error);
      }
    );
    // this.categoryService.Get_Categories_By_ID(this.categoryid).subscribe(
    //   (data) => {
    //     this.categories = data;
    //   },
    //   (error) => {
    //     // Xử lý lỗi
    //     console.error('Đã xảy ra lỗi:', error);
    //   }

    // )
    this.categoryService.Get_All_Categories().subscribe(
      (data) => {
        this.categories = data;
      }
    )
  }
}
