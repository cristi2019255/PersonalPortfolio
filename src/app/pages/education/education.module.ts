import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationPageComponent } from './components/education-page/education-page.component';
import { EducationPageRoutingModule } from './education-routing.module';

@NgModule({
  declarations: [EducationPageComponent],
  imports: [CommonModule, EducationPageRoutingModule],
})
export class EducationModule {}
