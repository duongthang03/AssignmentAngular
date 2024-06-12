import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/module-client/header/header.component';
import { FooterComponent } from './components/module-client/footer/footer.component';
import { BannerBottomComponent } from './components/module-client/banner-bottom/banner-bottom.component';
import { InfoHeaderComponent } from './components/module-client/info-header/info-header.component';
import { MenuComponent } from './components/module-client/menu/menu.component';
import { HomeComponent } from './components/module-client/home/home.component';
import { ProductListComponent } from './components/module-client/product-list/product-list.component';
import { PageFilterComponent } from './components/module-client/page-filter/page-filter.component';
import { ItemProductComponent } from './components/module-client/item-product/item-product.component';
import { ProductDetailComponent } from './components/module-client/product-detail/product-detail.component';
import { CartComponent } from './components/module-client/cart/cart.component';
import { AddProductComponent } from './components/module-admin/add-product/add-product.component';
import { AdminComponent } from './components/layout/admin/admin.component';
import { ClientComponent } from './components/layout/client/client.component';
import { MenuAdminComponent } from './components/module-admin/menu-admin/menu-admin.component';
import { HomeAdminComponent } from './components/module-admin/home-admin/home-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryProductComponent } from './components/module-admin/category-product/category-product.component';
import { HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './components/module-admin/edit-product/edit-product.component';
import { LoginComponent } from './components/module-client/login/login.component';
import { RegisterComponent } from './components/module-client/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerBottomComponent,
    InfoHeaderComponent,
    MenuComponent,
    HomeComponent,
    ProductListComponent,
    PageFilterComponent,
    ItemProductComponent,
    ProductDetailComponent,
    CartComponent,
    AddProductComponent,
    AdminComponent,
    ClientComponent,
    MenuAdminComponent,
    HomeAdminComponent,
    CategoryProductComponent,
    EditProductComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
