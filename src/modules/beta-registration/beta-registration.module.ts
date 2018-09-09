import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BetaRegistrationMainComponent} from "./components/beta-registration-main/beta-registration-main.component";
import { BetaRegistrationFormComponent } from './components/beta-registration-form/beta-registration-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BetaRegistrationMainComponent, BetaRegistrationFormComponent],
  exports: [
    BetaRegistrationMainComponent,
  ],
})
export class BetaRegistrationModule { }
