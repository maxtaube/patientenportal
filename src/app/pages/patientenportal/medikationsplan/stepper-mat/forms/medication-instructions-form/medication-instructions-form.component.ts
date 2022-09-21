import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MedicationFormsService} from "../medication-forms.service";
import * as moment from "moment";

@Component({
  selector: "app-medication-instructions-form",
  templateUrl: "./medication-instructions-form.component.html",
  styleUrls: ["./medication-instructions-form.component.scss"]
})
export class MedicationInstructionsFormComponent implements OnInit {

  instructionsForm: FormGroup;
  periodForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formsService: MedicationFormsService
  ) {
    this.periodForm = this.formBuilder.group({
      start: [moment()],
      end: []
    });
    this.instructionsForm = this.formBuilder.group({
      patientInstructions: [],
      reasonToTake: [],
      effectivePeriod: this.periodForm
    });
    this.formsService.stepReady(this.instructionsForm, "instructions");
    this.instructionsForm.setValue(this.instructionsForm.value);
  }

  ngOnInit(): void {
  }

}
