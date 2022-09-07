import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedikationsplanComponent } from './medikationsplan.component';

describe('MedikationsplanComponent', () => {
  let component: MedikationsplanComponent;
  let fixture: ComponentFixture<MedikationsplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedikationsplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedikationsplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
