import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b2',
  templateUrl: './exercice-b2.component.html',
  styleUrls: ['./exercice-b2.component.scss']
})
export class ExerciceB2Component implements OnInit {
  unNombre = 0;
  increment = 1;
  typeAjout = 'Incrémentation';
  constructor() { }

  ngOnInit() {
  }

  plusUn = function(){
    this.unNombre += this.increment;
    if(this.unNombre == 10 || this.unNombre == 0){
      this.increment *= -1;
    }
    if(this.increment == 1){
      this.typeAjout = 'Incrémentation';
    }
    else{
      this.typeAjout = 'Décrémentation';
    }
    
  }

}
