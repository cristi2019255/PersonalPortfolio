import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ContactPageRoutingModule } from './contact-page-routing.module';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, ContactPageRoutingModule],
})
export class ContactPageModule {}
