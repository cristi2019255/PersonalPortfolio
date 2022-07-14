import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperiencePageComponent } from './components/work-experience-page/work-experience-page.component';
import { WorkExperiencePageRoutingModule } from './work-experience-page-routing.module';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { TranslocoModule } from '@ngneat/transloco';
@NgModule({
  declarations: [WorkExperiencePageComponent],
  imports: [
    CommonModule,
    WorkExperiencePageRoutingModule,
    CarouselModule,
    WavesModule,
    TranslocoModule,
  ],
})
export class WorkExperiencePageModule {}
