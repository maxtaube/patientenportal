import { TestBed } from '@angular/core/testing';

import { MedicationFormsService } from './medication-forms.service';

describe('MedicationFormsService', () => {
  let service: MedicationFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicationFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
