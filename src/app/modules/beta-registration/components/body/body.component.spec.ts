import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from './body.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('BodyComponent', () => {
    let component: BodyComponent;
    let fixture: ComponentFixture<BodyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BodyComponent ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BodyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
