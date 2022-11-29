import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { CategoriesComponent } from './categories/categories.component';
import { PizzaComponent } from './pizza/pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    CategoriesComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
