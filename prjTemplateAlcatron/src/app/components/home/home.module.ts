import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DestaqueCarrosselComponent } from './destaque-carrossel/destaque-carrossel.component';



@NgModule({
  declarations: [
    HomeComponent,
    DestaqueCarrosselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
