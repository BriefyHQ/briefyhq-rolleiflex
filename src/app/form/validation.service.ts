import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';


interface IConfigMessages {
  [key: string]: string;
}

export class ValidationService {

  static getValidatorErrorMessage(code: string): string {
    const config: IConfigMessages = {
      required: 'Required',
      invalidCreditCard: 'Is invalid credit card number',
      invalidEmailAddress: 'Invalid email address',
      invalidPassword: 'Invalid password. Password must be at least 6 characters long, and contain a number.'
    };

    return config[code];
  }

  static emailValidator(control: FormControl): any {
    // RFC 2822 compliant regex
    let value = control.value;
    if (( value !== undefined ) && (value !== null)) {
      // tslint:disable-next-line:max-line-length
      if (value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
        value = null;
      } else {
        value = { invalidEmailAddress: true };
      }
    }
    return value;
  }

  static distinctValues(form: FormGroup, field: string) {
    let fieldChanges = false;
    return function innerFunction(control: FormControl) {
      if (!fieldChanges) {
        form.get(field).valueChanges
          .subscribe(() => {
            control.updateValueAndValidity();
          });
        fieldChanges = true;
      }
      if (control.value !== form.get(field).value) {
        return null;
      } else {
        return { shouldNotMatch: true };
      }
    };
  }

  static confirmPassword(form: FormGroup, field: string) {
    let fieldChanges = false;
    return function innerFunction(control: FormControl) {
      if (!fieldChanges) {
        form.get(field).valueChanges
          .subscribe(() => {
            control.updateValueAndValidity();
          });
        fieldChanges = true;
      }
      if (control.value === form.get(field).value) {
        return null;
      } else {
        return { not_matching: true };
      }
    };
  }

  static maxDate(form: FormGroup, maxDate: string): ValidatorFn {
    let status = null;
    return function innerFunction(control: FormControl) {
      const date = new Date(maxDate);
      if (control.value) {
        const value = new Date(control.value);
        if (value > date) {
          status = { maxDate: true };
        }
      }
      return status;
    };
  }

  static passwordValidator(control: FormControl) {
    // {6,100} - Assert password is between 6 and 100 characters
    if (control.value.match(/^[a-zA-Z0-9!@#$%?\.\-_,;`°^&'"*]{6,100}$/)) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }

  static urlValidator(control: FormControl) {
    const value = control.value;
    if (value.match && value.match(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}) {3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}) {2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}) {2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])) {2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i)) {  // tslint:disable-line
      return null;
    } else {
      return { invalidURL: true };
    }
  }

  static isGoogleDrive(control: FormControl) {
    const value = control.value;
    if (value.indexOf && value.indexOf('drive.google.com/') > -1) {
      return null;
    } else {
      return { invalidDriveURL: true };
    }
  }

  static maxLength(form: FormGroup, limit: number): ValidatorFn {
    let status = null;
    return function innerFunction(control: FormControl) {
      const value = control.value;
      if ((value !== undefined) && (value.length > limit)) {
        status = { maxLength: true };
      }
      return status;
    };
  }

}
