import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperiencePageComponent } from './components/work-experience-page/work-experience-page.component';
import { WorkExperiencePageRoutingModule } from './work-experience-page-routing.module';

@NgModule({
  declarations: [WorkExperiencePageComponent],
  imports: [CommonModule, WorkExperiencePageRoutingModule],
})
export class WorkExperiencePageModule {}
