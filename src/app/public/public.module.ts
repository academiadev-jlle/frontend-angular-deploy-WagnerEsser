import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
      HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: []
})

export class PublicModule { }
