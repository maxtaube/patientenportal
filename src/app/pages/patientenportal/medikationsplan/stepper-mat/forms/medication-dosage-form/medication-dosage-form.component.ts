import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MedicationFormsService} from "../medication-forms.service";

@Component({
  selector: "app-medication-dosage-form",
  templateUrl: "./medication-dosage-form.component.html",
  styleUrls: ["./medication-dosage-form.component.scss"]
})
export class MedicationDosageFormComponent implements OnInit {

  dosageForm: FormGroup;
  dosageSchemeForm: FormGroup;
  availableDosageUnits: string[] = [
    "piece",
    "g",
    "mg",
    "ml",
    "ie"
  ];

  constructor(
    private formBuilder: FormBuilder,
    private formService: MedicationFormsService
  ) {
    this.dosageSchemeForm = this.formBuilder.group({
      W: [0],
      X: [0],
      Y: [0],
      Z: [0]
    });
    this.dosageForm = this.formBuilder.group({
      type: ["text", Validators.required],
      text: [],
      unit: [],
      dosageScheme: this.dosageSchemeForm,
      timeCode: []
    });
    this.formService.stepReady(this.dosageForm, "dosage");
    this.dosageForm.setValue(this.dosageForm.value);
  }

  ngOnInit(): void {
  }

}
