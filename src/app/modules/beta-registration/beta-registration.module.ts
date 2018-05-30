import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './components/body/body.component';
import { BetaRegistrationComponent } from './components/beta-registration/beta-registration.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        BetaRegistrationComponent,
    ],
    declarations: [BodyComponent, BetaRegistrationComponent]
})
export class BetaRegistrationModule { }
