import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FrontPageRoutingModule } from './front-page-routing.module';



@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    FrontPageRoutingModule
  ],
  exports: []
})
export class FrontPageModule { }
