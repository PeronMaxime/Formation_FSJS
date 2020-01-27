import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b6',
  templateUrl: './exercice-b6.component.html',
  styleUrls: ['./exercice-b6.component.scss']
})
export class ExerciceB6Component implements OnInit {

  keyCode = '';
  constructor() { }

  ngOnInit() {
  }

  recupCode = function(e){
    this.keyCode = e.code;
  }

  suivre = function(){
    
  }

}
