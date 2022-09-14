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
import { StepperComponent } from './medikationsplan/stepper/stepper.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import {MatStepperModule} from "@angular/material/stepper";
import { StepperMatComponent } from './medikationsplan/stepper-mat/stepper-mat.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatButtonModule} from '@angular/material/button';

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
    MatSliderModule,
    MatCardModule,
    MatStepperModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    PatientenportalComponent,
    LandingpageComponent,
    DokumenteComponent,
    MedikationsplanComponent,
    StepperComponent,
    StepperMatComponent,
  ]
})
export class PatientenportalModule { }
