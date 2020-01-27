import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a2',
  templateUrl: './exercice-a2.component.html',
  styleUrls: ['./exercice-a2.component.scss']
})
export class ExerciceA2Component implements OnInit {
  promotions = [2015,2016,2017,2018,2019];
  classe = {
    nom: 'diwjs',
    specialite: 'JavaScript',
    nombre: 16
  }
  constructor() { }

  ngOnInit() {
  }

}
