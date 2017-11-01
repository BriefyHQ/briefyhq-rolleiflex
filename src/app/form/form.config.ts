import { Validators } from '@angular/forms';
import { ValidationService } from './validation.service';

export function requiredMessage(err: any, field: any): string {
  return `${field.templateOptions.label} is required.`;
}

export function minlengthMessage(err: any): string {
  return `Should have at least ${err.requiredLength} characters`;
}

export const BRIEFY_FORMLY_CONFIG: any = {
  validators: [{ name: 'required', validation: Validators.required}],
  validationMessages: [
    { name: 'required', message: requiredMessage },
    { name: 'invalidEmailAddress', message: 'Invalid Email Address' },
    { name: 'invalidPassword', message: 'Password must be at least 6 characters long.'},
    { name: 'maxlength', message: 'Maximum Length Exceeded.' },
    { name: 'minlength', message: minlengthMessage },
    { name: 'not_matching', message: 'Password Not Matching' },
    { name: 'zipCode', message: 'ZIP code should be 5 characters'},
    { name: 'uniqueUsername', message: 'This username is already taken.'},
    { name: 'dateNotInTheFuture', message: 'This date needs to be in the future.'},
    { name: 'max', message: 'This date is incorrect .'},
    { name: 'maxDate', message: 'This date is incorrect.'},
    { name: 'maxLength', message: 'Maximum number of elements exceeded.'},
    { name: 'invalidURL', message: 'The informed link is not valid.'},
    { name: 'invalidDriveURL', message: 'Link does not appear to be from Google Drive.'},
    { name: 'invalidPhoneNumber', message: 'This is not a valid phone number.'},
  ]
};
