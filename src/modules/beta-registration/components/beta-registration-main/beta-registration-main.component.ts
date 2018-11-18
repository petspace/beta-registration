import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {EnglishContent as Content} from "../../../../services/Content";
import {
  BetaRegistrationFormPlaceholder,
  BetaRegistrationInformation, BetaRegistrationOtherContent
} from "../beta-registration-form/beta-registration-form.component";

@Component({
  selector: 'app-beta-registration-main',
  templateUrl: './beta-registration-main.component.html',
  styleUrls: ['./beta-registration-main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BetaRegistrationMainComponent implements OnInit {

  content = Content;
  city = `${Content.CROATIA}, ${Content.ZAGREB}`;
  temperature: number = 27;
  betaRegistrationInformation: BetaRegistrationInformation;

  constructor() { }

  ngOnInit() {
    const placeholder: BetaRegistrationFormPlaceholder = {
      email: `${Content.EMAIL}...`,
      ownerName: `${Content.OWNER_NAME}...`,
    };
    const otherContent: BetaRegistrationOtherContent = {
      singUp: Content.SIGN_UP,
      register: Content.REGISTER,
      emailValidationText: Content.FORM_EMAIL_VALIDATION,
      emailValidationDescriptionText: Content.FORM_EMAIL_VALIDATION_DESCRIPTION,
      ownerNameValidationText: Content.FORM_NAME_VALIDATION,
      ownerNameValidationDescriptionText: Content.FORM_NAME_VALIDATION_DESCRIPTION,
    };
    this.betaRegistrationInformation = new BetaRegistrationInformation(placeholder, otherContent);
  }

  onFormSubmit(formData: BetaRegistrationInformation): boolean {
    console.log(formData, "form submited");
    return true;
  }
}
