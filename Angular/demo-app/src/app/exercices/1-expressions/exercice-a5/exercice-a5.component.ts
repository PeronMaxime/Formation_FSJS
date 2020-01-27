import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a5',
  templateUrl: './exercice-a5.component.html',
  styleUrls: ['./exercice-a5.component.scss']
})
export class ExerciceA5Component implements OnInit {
  couleur = '';
  constructor() { }

  ngOnInit() {
  }

  couleurBleu(){
    if(this.couleur == 'bleu' || this.couleur == 'bleu et blanc' || this.couleur == 'bleu et rouge' || this.couleur == 'bleu blanc rouge'){
      return true;
    }
    else{
      return false;
    }
  }
  couleurBlanche(){
    if(this.couleur == 'blanc' || this.couleur == 'bleu et blanc' || this.couleur == 'rouge et blanc' || this.couleur == 'bleu blanc rouge'){
      return true;
    }
    else{
      return false;
    }
  }
  couleurRouge(){
    if(this.couleur == 'rouge' || this.couleur == 'rouge et blanc' || this.couleur == 'bleu et rouge' || this.couleur == 'bleu blanc rouge'){
      return true;
    }
    else{
      return false;
    }
  }

}
