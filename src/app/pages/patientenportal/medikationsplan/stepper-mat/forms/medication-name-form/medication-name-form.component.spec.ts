import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationNameFormComponent } from './medication-name-form.component';

describe('MedicationNameFormComponent', () => {
  let component: MedicationNameFormComponent;
  let fixture: ComponentFixture<MedicationNameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationNameFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
