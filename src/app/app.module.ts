import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { CategoriesComponent } from './categories/categories.component';
import { PizzaComponent } from './pizza/pizza.component';
import { CakeComponent } from './cake/cake.component';
import { SouthFoodComponent } from './south-food/south-food.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
const myRoute:Routes=[
  {
    path:"",
    component:FoodComponent
  },
  {
    path:"category",
    component:CategoriesComponent
  },
  {
    path:"pizza",
    component:PizzaComponent
  },
  {
    path:"cake",
    component:CakeComponent

  },
  {
    path:"south",
    component:SouthFoodComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignUpComponent
  },
  {
    path:"order",
    component:OrderNowComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    CategoriesComponent,
    PizzaComponent,
    CakeComponent,
    SouthFoodComponent,
    LoginComponent,
    SignUpComponent,
    OrderNowComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
