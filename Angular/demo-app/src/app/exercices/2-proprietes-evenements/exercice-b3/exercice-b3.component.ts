import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b3',
  templateUrl: './exercice-b3.component.html',
  styleUrls: ['./exercice-b3.component.scss']
})
export class ExerciceB3Component implements OnInit {
  rubriqueActive = 0;
  constructor() { }

  ngOnInit() {
  }

  affecteRubrique = function(rubrique){
    this.rubriqueActive = rubrique;
  }

  testRubrique = function(rubriqueActive){
    if(rubriqueActive == this.rubriqueActive){
      return true;
    }
    else{
      return false;
    }
  }

}
