import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaRegistrationMainComponent } from './beta-registration-main.component';

describe('BetaRegistrationMainComponent', () => {
  let component: BetaRegistrationMainComponent;
  let fixture: ComponentFixture<BetaRegistrationMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetaRegistrationMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaRegistrationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
