import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BetaRegistrationMainComponent} from "./components/beta-registration-main/beta-registration-main.component";
import { BetaRegistrationFormComponent } from './components/beta-registration-form/beta-registration-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BetaRegistrationMainComponent, BetaRegistrationFormComponent],
  exports: [
    BetaRegistrationMainComponent,
  ],
})
export class BetaRegistrationModule { }
