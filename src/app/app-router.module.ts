import { NgModule, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { SassComponent } from './sass/sass.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const ROUTES = [
    {path: 'welcome', component: WelcomeComponent },
    {path: 'products', component: ProductsComponent},
    {path: 'addProduct', component: AddProductComponent},
    {path: 'sass', component: SassComponent},
    {path: 'rxjs', component: RxjsComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full' },
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, { enableTracing: true })
    ],
    providers: [

    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
    private linkArray = [{
        url: '/welcome',
        text: 'Home'
    },{
        url: '/products',
        text: 'Product List'
    },{
        url: '/sass',
        text: 'Sass Tutorial Demo'
    },{
        url: '/rxjs',
        text: 'RxJs Tutorial Demo'
    }];

    getLinkArray(){
        return this.linkArray;
    }
}