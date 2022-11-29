import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { CategoriesComponent } from './categories/categories.component';
import { PizzaComponent } from './pizza/pizza.component';
import { CakeComponent } from './cake/cake.component';
import { SouthFoodComponent } from './south-food/south-food.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    CategoriesComponent,
    PizzaComponent,
    CakeComponent,
    SouthFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
