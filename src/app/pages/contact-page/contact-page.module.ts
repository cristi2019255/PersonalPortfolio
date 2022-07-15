import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ContactPageRoutingModule } from './contact-page-routing.module';
import { TranslocoModule } from '@ngneat/transloco';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactPageComponent, EmailFormComponent],
  imports: [
    CommonModule,
    ContactPageRoutingModule,
    TranslocoModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ContactPageModule {}
