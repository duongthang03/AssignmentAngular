import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/module-client/home/home.component';
import { ProductListComponent } from './components/module-client/product-list/product-list.component';
import { ProductDetailComponent } from './components/module-client/product-detail/product-detail.component';
import { CartComponent } from './components/module-client/cart/cart.component';
import { AdminComponent } from './components/layout/admin/admin.component';
import { AddProductComponent } from './components/module-admin/add-product/add-product.component';
import { ClientComponent } from './components/layout/client/client.component';
import { HomeAdminComponent } from './components/module-admin/home-admin/home-admin.component';
import { MenuAdminComponent } from './components/module-admin/menu-admin/menu-admin.component';
import { CategoryProductComponent } from './components/module-admin/category-product/category-product.component';
import { EditProductComponent } from './components/module-admin/edit-product/edit-product.component';
import { LoginComponent } from './components/module-client/login/login.component';
import { RegisterComponent } from './components/module-client/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: HomeAdminComponent,
      },
      {
        path: 'products',
        component: AddProductComponent,
      },
      { path: 'add', component: AddProductComponent },
      {
        path: 'category',
        component: CategoryProductComponent,
      },
      { path: 'products/edit/:id', component: EditProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
