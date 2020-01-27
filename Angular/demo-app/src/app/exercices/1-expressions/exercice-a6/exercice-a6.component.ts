import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a6',
  templateUrl: './exercice-a6.component.html',
  styleUrls: ['./exercice-a6.component.scss']
})
export class ExerciceA6Component implements OnInit {
  voitures = [
    {
      modele : 'voiture1',
      puissance: 'pas puissante',
      prix: 5000,
      date: 6546486489675
    },
    {
      modele : 'voiture2',
      puissance: 'moyennement puissante',
      prix: 10000,
      date: 654648648912
    },
    {
      modele : 'voiture3',
      puissance: 'très puissante',
      prix: 20000,
      date: 6546486489
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
