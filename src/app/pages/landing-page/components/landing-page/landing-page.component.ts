import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var typewriter = document.getElementById('typewriter');
    let typer = this.setupTypewriter(typewriter);
  }

  setupTypewriter(t: any) {}
}
