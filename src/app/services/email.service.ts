import { Injectable } from '@angular/core';
import 'src/assets/smtp.js';
declare let Email: any;

const emailDestination = 'cristi2019255@gmail.com';

interface Email {
  to: string;
  from: string;
  subject: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}

  send(subject: string, body: string) {
    return Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'uimedicinesearch@gmail.com',
      Password: '3B8827BBB95AB68C1B3221398D9E0779AF75',
      To: 'cristi2019255@gmail.com',
      From: 'uimedicinesearch@gmail.com',
      Subject: subject,
      Body: body,
    }).then((message: any) => {
      console.log(message);
      return message;
    });
  }
}
