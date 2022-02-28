import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }

  IsTrue:boolean=false;
  ngOnInit(): void 
  {
  }

  clickme()
  {
    alert(1)
  }
}

