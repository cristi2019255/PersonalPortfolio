import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkExperiencePageComponent } from './components/work-experience-page/work-experience-page.component';

const routes: Routes = [
  {
    path: '',
    component: WorkExperiencePageComponent,
    data: {
      hideNavigation: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkExperiencePageRoutingModule {}
