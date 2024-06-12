import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../../../interface/product';
import { ProductService } from './../../../product.service';
import { CategoryService } from './../../../category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: ActivatedRoute,
  ) { }

  formAdd = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    count: new FormControl(0, [Validators.required, Validators.min(0)]),
    category: new FormControl('', [Validators.required]),
  });

  formEdit = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    count: new FormControl(0, [Validators.required, Validators.min(0)]),
    category: new FormControl('', [Validators.required]),
  });

  product: IProduct = {} as IProduct
  products: IProduct[] = [];
  categories: any[] = [];
  route = new Router();
  productid = this.router.snapshot.params['id'];

  ngOnInit() {
    this.productService.Get_All_Products().subscribe((data) => {
      this.products = data;
    });
    this.categoryService.Get_All_Categories().subscribe((data) => {
      this.categories = data;
    });
  }

  onSubmit() {
    if (this.formAdd.valid) {
      console.log(this.formAdd.value);
      this.productService
        .AddProduct(this.formAdd.value as IProduct)
        .subscribe((data) => {
          this.products.push(data);
          alert('Thêm sản phẩm thành công');
        },
          error => {
            console.log(error);

          }
        );
    }
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find((c) => c.id === categoryId);
    return category ? category.name : '';
  }

  onDelete = (productid: any) => {
    if (confirm('Bạn muốn xóa chứ?')) {
      this.productService.DeleteProduct(productid).subscribe((data) => {
        console.log(data);
        this.products = this.products.filter(
          (product) => product.id !== productid
        );
      });
    }
  };

  onClickProductByID = (id: any) => {
    this.productService.Get_Products_By_ID(id).subscribe(
      data => {
        this.formEdit.controls.id.setValue(data.id)
        this.formEdit.controls.name.setValue(data.name)
        this.formEdit.controls.image.setValue(data.image)
        this.formEdit.controls.price.setValue(data.price)
        this.formEdit.controls.count.setValue(data.count)
        this.formEdit.controls.category.setValue(data.category)
      },
      err => {
      }
    )
  }

  onUpdate() {
    if (this.formEdit.valid) {
      this.productService.EditProduct(this.formEdit.controls.id.value as any, this.formEdit.value as IProduct).subscribe(
        data => {
          alert('Cập nhật thành công');
          // this.route.navigate(['admin/products']);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}