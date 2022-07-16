import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent {
  emailForm: FormGroup = new FormGroup({});
  errorMessage: string = '';
  emailIsSent = false;
  emailSentError = false;

  constructor(private emailService: EmailService) {
    this.createForm();
  }

  private createForm() {
    this.emailForm = new FormGroup({
      name: new FormControl(''),
      subject: new FormControl(''),
      message: new FormControl(''),
      email: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.emailForm.invalid) {
      this.emailForm.markAllAsTouched();
      this.emailSentError = true;
      this.emailIsSent = false;
      return;
    }

    const information = this.emailForm.value;

    let subject = `Personal Portfolio: ${information.subject}`;
    let body = `Hi Cristian, I am ${information.name} and I would like to contact you regarding your portfolio. 
    <br/> <br/>
    ${information.message} 
    <br/> <br/>
    Please contact me as soon as possible at my mail address: ${information.email}. 
    <br/> <br/>
    Kind regards, ${information.name}!`;

    const response = this.emailService.send(subject, body);

    if (response === 'OK') {
      this.emailSentError = false;
      this.emailIsSent = true;
    } else {
      this.emailSentError = true;
      this.emailIsSent = false;
    }
  }
}
