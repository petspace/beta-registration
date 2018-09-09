import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaRegistrationFormComponent } from './beta-registration-form.component';

describe('BetaRegistrationFormComponent', () => {
  let component: BetaRegistrationFormComponent;
  let fixture: ComponentFixture<BetaRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetaRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
