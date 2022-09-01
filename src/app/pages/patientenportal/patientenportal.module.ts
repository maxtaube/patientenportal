import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,  NbIconModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { PatientenportalRoutingModule } from './patientenportal-routing.module';
import { PatientenportalComponent } from './patientenportal.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DokumenteComponent } from './dokumente/dokumente.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    PatientenportalRoutingModule,
    NbIconModule,
  ],
  declarations: [
    PatientenportalComponent,
    LandingpageComponent,
    DokumenteComponent,
  ]
})
export class PatientenportalModule { }
