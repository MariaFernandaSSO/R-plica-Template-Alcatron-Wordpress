import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DestaqueCarrosselComponent } from './destaque-carrossel/destaque-carrossel.component';
import { CardsInfoComponent } from './cards-info/cards-info.component';



@NgModule({
  declarations: [
    HomeComponent,
    DestaqueCarrosselComponent,
    CardsInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
