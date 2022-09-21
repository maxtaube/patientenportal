import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationDosageFormComponent } from './medication-dosage-form.component';

describe('MedicationDosageFormComponent', () => {
  let component: MedicationDosageFormComponent;
  let fixture: ComponentFixture<MedicationDosageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationDosageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationDosageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
