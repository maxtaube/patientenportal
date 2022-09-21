import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class MedicationFormsService {

  private stepMedicationSource: Subject<FormGroup> = new Subject();
  stepMedication: Observable<FormGroup> = this.stepMedicationSource.asObservable();
  stepMedicationValid: boolean = false;

  private stepDosageSource: Subject<FormGroup> = new Subject();
  stepDosage: Observable<FormGroup> = this.stepDosageSource.asObservable();
  stepDosageValid: boolean = false;

  private stepInstructionsSource: Subject<FormGroup> = new Subject();
  stepInstructions: Observable<FormGroup> = this.stepInstructionsSource.asObservable();
  stepInstructionsValid: boolean = false;

  mainForm: FormGroup = this._formBuilder.group({
    id: {},
    medication: {},
    dosage: {},
    patientInstructions: "",
    reasonToTake: "",
    effectivePeriod: {},
    subject: "",
    status: ""
  });

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.stepMedication.subscribe(form =>
      form.valueChanges.subscribe(value => {
        this.stepMedicationValid = form.valid;
        
      })
    );
    this.stepDosage.subscribe(form =>
      form.valueChanges.subscribe(value => {
        this.stepDosageValid = form.valid;
        
      })
    );
    
  }


  stepReady(form: FormGroup, part: string) {
    switch (part) {
      case "medication": {
        this.stepMedicationSource.next(form);
        return;
      }
      case "dosage": {
        this.stepDosageSource.next(form);
        return;
      }
      case "instructions": {
        this.stepInstructionsSource.next(form);
        return;
      }
    }
  }

  isStepValid(label: string) {
    switch (label) {
      case "medication": {
        return this.stepMedicationValid;
      }
      case "dosage": {
        return this.stepDosageValid;
      }
      case "instructions": {
        return this.stepInstructionsValid;
      }
      case "summary": {
        return this.stepMedicationValid && this.stepDosageValid && this.stepInstructionsValid;
      }
    }
  }

  getAsyncValue() {

  }
}
