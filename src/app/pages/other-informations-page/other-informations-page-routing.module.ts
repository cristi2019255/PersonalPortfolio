import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherInformationsPageComponent } from './components/other-informations-page/other-informations-page.component';

const routes: Routes = [
  {
    path: '',
    component: OtherInformationsPageComponent,
    data: {
      hideNavigation: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherInformationsPageRoutingModule {}
