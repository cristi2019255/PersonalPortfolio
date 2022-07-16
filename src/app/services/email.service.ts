import { Injectable } from '@angular/core';
import 'src/assets/smtp.js';
declare let Email: any;

const emailDestination = 'cristi2019255@gmail.com';
const emailSender = 'uimedicinesearch@gmail.com';
const emailPassword = '3B8827BBB95AB68C1B3221398D9E0779AF75';
const emailHost = 'smtp.elasticemail.com';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}

  send(subject: string, body: string) {
    return Email.send({
      Host: emailHost,
      Username: emailSender,
      Password: emailPassword,
      To: emailDestination,
      From: emailSender,
      Subject: subject,
      Body: body,
    }).then((message: any) => {
      return message;
    });
  }
}
