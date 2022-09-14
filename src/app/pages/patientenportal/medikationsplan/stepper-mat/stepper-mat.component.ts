import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-stepper-mat',
  templateUrl: './stepper-mat.component.html',
  styleUrls: ['./stepper-mat.component.scss']
})
export class StepperMatComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  isLinear = true;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  ngOnInit(): void {
  }

}
