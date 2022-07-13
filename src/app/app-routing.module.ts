import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        (m: any) => m.LandingPageModule
      ),
  },
  {
    path: 'education',
    loadChildren: () =>
      import('./pages/education/education.module').then(
        (m: any) => m.EducationModule
      ),
  },
  {
    path: 'work-experience',
    loadChildren: () =>
      import('./pages/work-experience-page/work-experience-page.module').then(
        (m: any) => m.WorkExperiencePageModule
      ),
  },
  {
    path: 'other-information',
    loadChildren: () =>
      import(
        './pages/other-informations-page/other-informations-page.module'
      ).then((m: any) => m.OtherInformationsPageModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact-page/contact-page.module').then(
        (m: any) => m.ContactPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
