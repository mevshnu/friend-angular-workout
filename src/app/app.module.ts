import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

const myrout:Routes=[
  {
    path:"",
    component:ViewComponent
  },
  {
    path:"add",
    component:AddComponent
  },
  {
    path:"search",
    component:SearchComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    NavComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myrout),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
