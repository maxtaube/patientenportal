import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MedicationFormsService} from "../medication-forms.service";
import {debounceTime, switchMap, tap} from "rxjs/operators";
import * as uuid from 'uuid';



@Component({
  selector: "app-medication-name-form",
  templateUrl: "./medication-name-form.component.html",
  styleUrls: ["./medication-name-form.component.scss"]
})
export class MedicationNameFormComponent implements OnInit, AfterViewInit {

  medicationForm: FormGroup;
  nameIsLoading: boolean;

  @ViewChild("tradeNameField")
  tradeNameField: ElementRef;
  availableMedicationForms: string[] = [
    "pills",
    "creme",
    "fluid",
    "drops",
    "spray",
    "injection"
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private formService: MedicationFormsService,
  ) {
    this.nameIsLoading = false;
    this.medicationForm = this._formBuilder.group({
      tradeName: [null, Validators.required],
      manufacturer: [],
      pzn: [],
      substances: [],
      form: [],
      image: [],
      id: [uuid.v4()]
    });
    // when name input value changes, use the value to filter medications by trade name to update auto complete
    this.medicationForm.get("tradeName")!.valueChanges.pipe(
      debounceTime(300),
      tap(() => this.nameIsLoading = true),
    ).subscribe(filteredStatements => {
      this.nameIsLoading = false;
    });
    this.formService.stepReady(this.medicationForm, "medication");
    this.medicationForm.setValue(this.medicationForm.value);

  }

  ngAfterViewInit() {
    this.tradeNameField.nativeElement.focus();
  }

  ngOnInit(): void {
  }


  getMedicationImage() {
    if (this.medicationForm.value.image) {
      return this.medicationForm.value.image;
    }
    return "assets/img/placeholder-1500.png";
  }

  imageFileSelected(event: any) {
    if (event.target && event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        this.medicationForm.patchValue({
          image: reader.result
        })
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    }
  }


}
