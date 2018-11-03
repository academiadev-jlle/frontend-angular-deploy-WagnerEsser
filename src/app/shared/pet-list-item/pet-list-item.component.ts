import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pet-list-item',
    templateUrl: 'pet-list-item.component.html'
})

export class PetListItemComponent {
    @Input() name: string;
    @Input() description: string;
}