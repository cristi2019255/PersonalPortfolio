import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationPageComponent } from './components/education-page/education-page.component';
import { EducationPageRoutingModule } from './education-routing.module';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { TranslocoModule } from '@ngneat/transloco';
@NgModule({
  declarations: [EducationPageComponent],
  imports: [
    CommonModule,
    EducationPageRoutingModule,
    CarouselModule,
    WavesModule,
    TranslocoModule,
  ],
})
export class EducationModule {}
