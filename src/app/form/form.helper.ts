import { AbstractControl } from '@angular/forms';


export interface IBadRequestErrorItem {
  location?: string;
  name: string;
  description: string;
}


export function markFormControlErrors(
  formControls: {[key: string]: AbstractControl},
  errors: IBadRequestErrorItem[]
) {
  for (const info of errors) {
    const formKey = info['name'];
    if (formControls.hasOwnProperty(formKey)) {
      const control = formControls[formKey];
      control.setErrors({ serverError: info['description']});
    }
  }
}
