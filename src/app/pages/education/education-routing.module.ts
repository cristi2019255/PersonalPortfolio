import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationPageComponent } from './components/education-page/education-page.component';

const routes: Routes = [
  {
    path: '',
    component: EducationPageComponent,
    data: {
      hideNavigation: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationPageRoutingModule {}
