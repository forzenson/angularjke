import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { ShopModule } from './shop/shop.module';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
      path: 'shop',
      // loadChildren: () => ShopModule
      // lazy loaded
      loadChildren: './shop/shop.module#ShopModule'
    },
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
          RouterModule.forRoot(routes)
  ],
  exports: [
          RouterModule
  ]
})
export class AppRoutingModule{ }
