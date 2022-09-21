import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MedicationFormsService } from './forms/medication-forms.service';

@Component({
  selector: 'ngx-stepper-mat',
  templateUrl: './stepper-mat.component.html',
  styleUrls: ['./stepper-mat.component.scss']
})

/* interface MedicationDialogData {
  medicationStatement: MedicationStatement;
  dialogType: MedicationDialogType;
} */

export class StepperMatComponent implements OnInit {

  constructor(
    /* @Inject(MAT_DIALOG_DATA) public dialogData: MedicationDialogData, */
    private _formBuilder: FormBuilder,
    public formService: MedicationFormsService,
  ) {
      /* this.formService.reset(this.dialogData.medicationStatement); */
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  ngOnInit(): void {
  }

}
