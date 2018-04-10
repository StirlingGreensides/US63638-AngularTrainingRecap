import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './products/products.service';
import { ProductComponent } from './products/product.component';
import { productReducer } from './reducers/product.reducer';
import { ProductEffects } from './effects/product.effects';
import { SassComponent } from './sass/sass.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-router.module';
import { AddProductComponent } from './products/add-product/add-product.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { SafeHtmlPipe } from './pipes/safe-html-pipe ';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    SassComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    AddProductComponent,
    RxjsComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({products: productReducer}),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
