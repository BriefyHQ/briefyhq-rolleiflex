import { FormlyConfig } from 'ng-formly';

export class TemplateAddons {
  run(fc: FormlyConfig) {
    fc.templateManipulators.postWrapper.push((field) => {
      if (field && field.templateOptions && (field.templateOptions.addonLeft || field.templateOptions.addonRight)) {
        return 'addons';
      }
    });
  }
}
