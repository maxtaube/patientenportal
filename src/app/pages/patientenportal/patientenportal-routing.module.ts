import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientenportalComponent } from './patientenportal.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DokumenteComponent } from './dokumente/dokumente.component';

const routes: Routes = [{
  path: '',
  component: PatientenportalComponent,
  children: [
    {
      path: 'landingpage',
      component: LandingpageComponent,
    },
    {
      path: 'dokumente',
      component: DokumenteComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientenportalRoutingModule {
}
