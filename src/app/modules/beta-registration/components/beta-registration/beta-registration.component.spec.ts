import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaRegistrationComponent } from './beta-registration.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('BetaRegistrationComponent', () => {
    let component: BetaRegistrationComponent;
    let fixture: ComponentFixture<BetaRegistrationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BetaRegistrationComponent ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BetaRegistrationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
