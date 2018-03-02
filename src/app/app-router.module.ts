import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductsComponent } from './products/products.component';


const ROUTES = [
    {path: 'welcome', component: WelcomeComponent },
    {path: 'products', component: ProductsComponent},
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