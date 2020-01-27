import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-structurelles',
  templateUrl: './directives-structurelles.component.html',
  styleUrls: ['./directives-structurelles.component.scss']
})
export class DirectivesStructurellesComponent implements OnInit {
  image: string = "https://picsum.photos/400/300";
  constructor() { }
  afficherImage: boolean = false;
  ngOnInit() {
    setTimeout(()=>{
      this.afficherImage = true;
    }, 2000);
  }

}
