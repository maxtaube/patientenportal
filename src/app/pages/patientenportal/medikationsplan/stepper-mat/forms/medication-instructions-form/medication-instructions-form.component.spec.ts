import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationInstructionsFormComponent } from './medication-instructions-form.component';

describe('MedicationInstructionsFormComponent', () => {
  let component: MedicationInstructionsFormComponent;
  let fixture: ComponentFixture<MedicationInstructionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationInstructionsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationInstructionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
