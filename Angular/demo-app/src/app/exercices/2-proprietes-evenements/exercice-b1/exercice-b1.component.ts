import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b1',
  templateUrl: './exercice-b1.component.html',
  styleUrls: ['./exercice-b1.component.scss']
})
export class ExerciceB1Component implements OnInit {
  chien = 'https://picsum.photos/400/300';

  chats = ['https://picsum.photos/400/300', 'https://picsum.photos/400/300', 'https://picsum.photos/400/300'];
  constructor() { }

  ngOnInit() {
  }

}
