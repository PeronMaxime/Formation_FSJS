import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a3',
  templateUrl: './exercice-a3.component.html',
  styleUrls: ['./exercice-a3.component.scss']
})
export class ExerciceA3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  classe = {
    nom: 'DIWJS',
    specialite: 'JavaScript',
    inscrits: [
      {
        prenom: 'Fantine',
        nom: 'Rudent',
        age: 27
      },
      {
        prenom: 'Sebastien',
        nom: 'Reuter',
        age: 35
      },
      {
        prenom: 'Maxime',
        nom: 'Peron',
        age: 27
      }
    ]
  }
}
