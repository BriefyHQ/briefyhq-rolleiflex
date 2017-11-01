import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { FormlyFieldConfig } from 'ng-formly';
import { FormlyValidationMessages } from 'ng-formly';


@Component({
  selector: 'formly-validation-message',
  template: `{{ errorMessage }}`,
})
export class FormlyValidationMessageComponent {

  @Input() fieldForm: FormControl;
  // @Input() field: FormlyFieldConfig;
  @Input() field: any;

  constructor(private formlyMessages: FormlyValidationMessages) {}

  get errorMessage(): string {
    for (const error in this.fieldForm.errors) {
      if (this.fieldForm.errors.hasOwnProperty(error)) {
        let message: string|Function = this.formlyMessages.getValidatorErrorMessage(error);

        if (this.field.validation && this.field.validation.messages && this.field.validation.messages[error]) {
          message = this.field.validation.messages[error];
        }

        if (this.field.validators && this.field.validators[error] && this.field.validators[error].message) {
          message = this.field.validators[error].message;
        }

        if (this.field.asyncValidators && this.field.asyncValidators[error] && this.field.asyncValidators[error].message) {
          message = this.field.asyncValidators[error].message;
        }

        if (typeof message === 'function') {
          return message(this.fieldForm.errors[error], this.field);
        }
        if (!message) {
          message = `${this.fieldForm.errors[error]}`;
        }
        return message;
      }
    }
  }
}
