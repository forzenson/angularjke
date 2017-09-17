import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";

import { AppCommonModule } from "./common/common.module";
import { ShopModule } from "./shop/shop.module";

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppCommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
