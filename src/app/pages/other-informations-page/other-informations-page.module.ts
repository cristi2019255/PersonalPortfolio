import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherInformationsPageComponent } from './components/other-informations-page/other-informations-page.component';
import { OtherInformationsPageRoutingModule } from './other-informations-page-routing.module';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [OtherInformationsPageComponent],
  imports: [CommonModule, OtherInformationsPageRoutingModule, TranslocoModule],
})
export class OtherInformationsPageModule {}
