import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

export interface BetaRegistrationFormPlaceholder {
  email: string;
  ownerName: string;
}
export interface BetaRegistrationOtherContent {
  singUp: string;
  register: string;
  emailValidationText: string;
  emailValidationDescriptionText: string;
  ownerNameValidationDescriptionText: string;
  ownerNameValidationText: string;
}

export interface BetaRegistrationForm {
  email: string;
  ownerName: string;
  isPetOwner: boolean;
}

export class BetaRegistrationInformation {
  form: BetaRegistrationForm = {
    email: '',
    ownerName: '',
    isPetOwner: true,
  };
  otherContent: BetaRegistrationOtherContent;

  readonly placeholder: {
    email: string;
    ownerName: string;
  };

  constructor(placeholder: BetaRegistrationFormPlaceholder, otherContent: BetaRegistrationOtherContent) {
    this.placeholder = placeholder;
    this.otherContent = otherContent;
  }

}

export class RegistrationFormControl {
  form: FormGroup;
  controls: {
    email: FormControl,
    ownerName: FormControl,
    isPetOwner: FormControl
  };

  constructor(data: BetaRegistrationForm) {
    this.controls = {
      email: new FormControl(data.email, [
        Validators.required,
        Validators.email,
      ]),

      ownerName: new FormControl(data.ownerName, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40),
      ]),

      isPetOwner: new FormControl(data.isPetOwner, [
        Validators.required,
      ]),
    };

    this.createForm();
  }

  isValid() {
    return this.form.valid;
  }

  private createForm() {
    this.form = new FormGroup(this.controls);
  }

}

@Component({
  selector: 'app-beta-registration-form',
  templateUrl: './beta-registration-form.component.html',
  styleUrls: ['./beta-registration-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BetaRegistrationFormComponent implements OnInit {

  @Input()
  betaRegistrationInformation: BetaRegistrationInformation;

  @Input()
  onSubmit: (formData: BetaRegistrationInformation) => boolean;

  form: RegistrationFormControl;

  constructor() { }

  ngOnInit() {
    console.log(this.betaRegistrationInformation);

    this.form = new RegistrationFormControl(this.betaRegistrationInformation.form);
  }

  formSubmit() {
    if (this.form.isValid()) {
      console.log("Hello", this.form.isValid())
    }else {
      console.log("not valid")
    }
    console.log("formSubmit", this.betaRegistrationInformation);
    this.onSubmit(this.betaRegistrationInformation);
  }

  inputValid(inputFormControl: FormControl) {
    return inputFormControl.errors && (inputFormControl.dirty || inputFormControl.touched);
  }
}
