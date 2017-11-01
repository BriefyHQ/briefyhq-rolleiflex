import { FormlyFieldConfig, FormlyConfig } from 'ng-formly';

export class TemplateValidation {
  run(fc: FormlyConfig) {
    fc.templateManipulators.postWrapper.push((field: FormlyFieldConfig) => {
      if (field && field.validators) {
        return 'validation-message';
      }
    });
  }
}
