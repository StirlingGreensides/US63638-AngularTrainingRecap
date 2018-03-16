import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { SassComponent } from './sass/sass.component';

const ROUTES = [
    {path: 'welcome', component: WelcomeComponent },
    {path: 'products', component: ProductsComponent},
    {path: 'addProduct', component: AddProductComponent},
    {path: 'sass', component: SassComponent},
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

export class AppRoutingModule {}