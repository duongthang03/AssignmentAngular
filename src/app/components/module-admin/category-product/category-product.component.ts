import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from './../../../category.service';
import { Component } from '@angular/core';
import { ICategory } from '../../../../interface/category';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrl: './category-product.component.css',
})
export class CategoryProductComponent {
  constructor(private categoryService: CategoryService) {}
  formCategory = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  categories: ICategory[] = [];
  ngOnInit() {
    this.categoryService.Get_All_Categories().subscribe((data) => {
      this.categories = data;
    });
  }
  onSubmit() {
    if (this.formCategory.valid) {
      console.log(this.formCategory.value);
      this.categoryService
        .AddCategory(this.formCategory.value as ICategory)
        .subscribe((data) => {
          this.categories.push(data);
          alert('Thêm danh mục thành công');
        });
    }
  }
}
