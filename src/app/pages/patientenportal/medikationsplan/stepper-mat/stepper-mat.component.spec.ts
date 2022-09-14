import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperMatComponent } from './stepper-mat.component';

describe('StepperMatComponent', () => {
  let component: StepperMatComponent;
  let fixture: ComponentFixture<StepperMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperMatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
