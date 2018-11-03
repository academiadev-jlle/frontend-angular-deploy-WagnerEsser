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
      id: 1,
      name: 'Alfredo',
      description: 'Ahhhhhhhhhhhhhhhhhhhhhh'
    }, {
      id: 2,
      name: 'Juca',
      description: 'Buáááá, tô perdido'
    }
  ];
  adoptionPets: PetOptions[] = [
    {
      id: 3,
      name: 'Dunga',
      description: 'Quero uma bola'
    }, {
      id: 4,
      name: 'Doka',
      description: 'Tô com fome'
    }
  ];
  adoptedPets: PetOptions[] = []

  constructor() { }

  counter = 0;

  ngOnInit() {
  }

}
