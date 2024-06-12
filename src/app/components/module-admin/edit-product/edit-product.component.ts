import { CategoryService } from './../../../category.service';
import { Component } from '@angular/core';
import { ProductService } from '../../../product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../../interface/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: ActivatedRoute,
  ) { }
  formEdit = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    count: new FormControl(0, [Validators.required, Validators.min(0)]),
    category: new FormControl('', [Validators.required]),
  });
  categories: any[] = [];
  productid = this.router.snapshot.params['id'];
  route = new Router();
  ngOnInit() {
    this.productService.Get_Products_By_ID(this.productid).subscribe((data) => {
      console.log(data);
      this.formEdit.controls.name.setValue(data.name);
      this.formEdit.controls.price.setValue(data.price);
      this.formEdit.controls.image.setValue(data.image);
      this.formEdit.controls.count.setValue(data.count);
      this.formEdit.controls.category.setValue(data.category);
    });
    this.categoryService.Get_All_Categories().subscribe(
      (data) => {
        this.categories = data;
      }
    )
  }
  onSubmit() {
    if (this.formEdit.valid) {
      this.productService
        .EditProduct(this.productid, this.formEdit.value as IProduct)
        .subscribe((data) => {
          alert('Cập nhật thành công');
          this.route.navigate(['admin/products']);
        });
    }
  }
}
