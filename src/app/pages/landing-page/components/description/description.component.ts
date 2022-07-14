import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

// @ts-ignore
import Typewriter from 't-writer.js';

const helloMessage = 'landing-page.label.welcome';
const helloMessageSub = 'landing-page.label.welcome-sub';
const description1 = 'landing-page.label.description1';
const description2 = 'landing-page.label.description2';
const description3 = 'landing-page.label.description3';
const description4 = 'landing-page.label.description4';
const description5 = 'landing-page.label.description5';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  age: number;
  constructor(private translateService: TranslocoService) {
    this.age = this.getAge();
  }

  ngOnInit(): void {
    this.typeInformation();
  }

  getAge(): number {
    let age = new Date().getFullYear() - 2000;
    return age;
  }

  typeInformation(): void {
    const target = document.querySelector('#type-writer');

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 50,
      typeColor: 'inherit',
    });

    writer
      .type(this.translateService.translate(helloMessage))
      .type(
        '<br/>' +
          this.age +
          this.translateService.translate(helloMessageSub) +
          '<br/>'
      )
      .rest(500)
      .type(this.translateService.translate(description1) + '<br/>')
      .rest(500)
      .type(this.translateService.translate(description2) + '<br/>')
      .rest(500)
      .type(this.translateService.translate(description3) + '<br/>')
      .rest(500)
      .type(this.translateService.translate(description4) + '<br/>')
      .rest(500)
      .type(this.translateService.translate(description5) + '<br/>')
      .start();
  }
}
