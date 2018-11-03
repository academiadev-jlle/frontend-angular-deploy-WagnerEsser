import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PetListItemComponent } from './pet-list-item/pet-list-item.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';

@NgModule({
    declarations: [
        PetListItemComponent,
        HeaderComponent,
        FooterComponent,
        PetDetailComponent
    ],
    exports: [
        PetListItemComponent,
        HeaderComponent,
        FooterComponent
    ]
})

export class SharedModule {

}