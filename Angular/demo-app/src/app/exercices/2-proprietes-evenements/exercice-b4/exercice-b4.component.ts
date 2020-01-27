import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b4',
  templateUrl: './exercice-b4.component.html',
  styleUrls: ['./exercice-b4.component.scss']
})
export class ExerciceB4Component implements OnInit {
  tabStyle = [
    {
      width: '200px',
      height: '100px',
      backgroundColor: 'red'
    },
    {
      width: '300px',
      height: '200px',
      backgroundColor: 'blue'
    },
    {
      width: '400px',
      height: '300px',
      backgroundColor: 'green'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  incremente = function(index){
    let valeur = parseInt(this.tabStyle[index].width);
    valeur++;
    this.tabStyle[index].width = valeur+'px';
  }

}
