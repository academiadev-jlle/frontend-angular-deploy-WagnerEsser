import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PetListItemComponent } from './shared/pet-list-item/pet-list-item.component';
import { HomeComponent } from './public/home/home.component';
import { PublicModule } from './public/public.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
