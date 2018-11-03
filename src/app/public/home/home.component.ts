import { Component, OnInit } from '@angular/core';
import { PetOptions } from 'src/app/shared/pet-list-item/pet-list-item.options';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lostPets: PetOptions[] = [
    {
      name: 'Alfredo',
      description: 'Ahhhhhhhhhhhhhhhhhhhhhh'
    }, {
      name: 'Juca',
      description: 'Buáááá, tô perdido'
    }
  ];
  adoptionPets: PetOptions[] = [
    {
      name: 'Dunga',
      description: 'Quero uma bola'
    }, {
      name: 'Doka',
      description: 'Tô com fome'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
