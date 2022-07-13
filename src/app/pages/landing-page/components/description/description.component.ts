import { Component, OnInit } from '@angular/core';

// @ts-ignore
import Typewriter from 't-writer.js';

const helloMessage = 'Hi, I am Cristian. Nice to meet you!';
const description1 = ' years old.';
const description2 =
  'I am enthusiastic, responsible, and technically skilled candidate with good problem - solving abilities,self-motivated and self-directed.';
const description3 =
  'I am able to stay focused on the ultimate goal and continue to work toward that result. Productive in both self-managed and team-based projects .';
const description4 =
  'I am a self-starter and a team player. I am able to work in a team environment and have the ability to work independently.';
const description5 =
  'Quickly learn new technologies and paying big attention to details.I am able to work well under pressure,to accomplish tasks under minimal direction and supervision and to adhere to strict deadlines.';
const description6 =
  'Currently very interested in Artificial Intelligence, Full stack Web Development and Data Analysis.';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  age: number;
  constructor() {
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
    const writer = new Typewriter(target, { loop: true, typeSpeed: 50 });

    writer
      .type(helloMessage)
      .type('<br/>' + this.age + description1 + '<br/>')
      .rest(500)
      .type(description2 + '<br/>')
      .rest(500)
      .type(description3 + '<br/>')
      .rest(500)
      .type(description4 + '<br/>')
      .rest(500)
      .type(description5 + '<br/>')
      .rest(500)
      .type(description6 + '<br/>')
      .start();
  }
}
