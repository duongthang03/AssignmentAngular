import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerBottomComponent } from './components/banner-bottom/banner-bottom.component';
import { BoxProductComponent } from './components/box-product/box-product.component';
import { InfoHeaderComponent } from './components/info-header/info-header.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageFilterComponent } from './components/page-filter/page-filter.component';
import { ItemProductComponent } from './components/item-product/item-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerBottomComponent,
    BoxProductComponent,
    InfoHeaderComponent,
    MenuComponent,
    HomeComponent,
    ProductListComponent,
    PageFilterComponent,
    ItemProductComponent,
    ProductDetailComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
