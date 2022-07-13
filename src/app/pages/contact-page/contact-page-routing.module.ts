import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactPageComponent,
    data: {
      hideNavigation: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactPageRoutingModule {}
