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
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { PatientenportalRoutingModule } from './patientenportal-routing.module';
import { PatientenportalComponent } from './patientenportal.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DokumenteComponent } from './dokumente/dokumente.component';
import { MedikationsplanComponent } from './medikationsplan/medikationsplan.component';

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
    Ng2SmartTableModule,
  ],
  declarations: [
    PatientenportalComponent,
    LandingpageComponent,
    DokumenteComponent,
    MedikationsplanComponent,
  ]
})
export class PatientenportalModule { }
