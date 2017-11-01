// import { ConfigOption } from 'ng-formly';
import { FormlyWrapperAddonsComponent } from './wrappers/addons';
import { TemplateDescription } from './run/description';
import { TemplateValidation } from './run/validation';
import { TemplateAddons } from './run/addon';
import {
  FormlyFieldInputComponent,
  FormlyFieldCheckboxComponent,
  FormlyFieldRadioComponent,
  FormlyFieldSelectComponent,
  FormlyFieldTextAreaComponent,
  FormlyFieldMultiCheckboxComponent,
} from './types/types';
import {
  FormlyWrapperLabelComponent,
  FormlyWrapperDescriptionComponent,
  FormlyWrapperValidationMessagesComponent,
  FormlyWrapperFieldsetComponent,
} from './wrappers/wrappers';

export const FIELD_TYPE_COMPONENTS = [
  // types
  FormlyFieldInputComponent,
  FormlyFieldCheckboxComponent,
  FormlyFieldRadioComponent,
  FormlyFieldSelectComponent,
  FormlyFieldTextAreaComponent,
  FormlyFieldMultiCheckboxComponent,

  // wrappers
  FormlyWrapperLabelComponent,
  FormlyWrapperDescriptionComponent,
  FormlyWrapperValidationMessagesComponent,
  FormlyWrapperFieldsetComponent,
  FormlyWrapperAddonsComponent,
];

export const MATERIAL_FORMLY_CONFIG: any = {
  types: [
    {
      name: 'input',
      component: FormlyFieldInputComponent,
      wrappers: ['fieldset', 'label'],
      // wrappers: [],
    },
    {
      name: 'checkbox',
      component: FormlyFieldCheckboxComponent,
      wrappers: ['fieldset'],
    },
    {
      name: 'radio',
      component: FormlyFieldRadioComponent,
      wrappers: ['fieldset', 'label'],
    },
    {
      name: 'select',
      component: FormlyFieldSelectComponent,
      wrappers: ['fieldset', 'label'],
    },
    {
      name: 'textarea',
      component: FormlyFieldTextAreaComponent,
      wrappers: ['fieldset', 'label'],
    },
    {
      name: 'multicheckbox',
      component: FormlyFieldMultiCheckboxComponent,
      wrappers: ['fieldset', 'label'],
    },
  ],
  wrappers: [
    {name: 'label', component: FormlyWrapperLabelComponent},
    {name: 'description', component: FormlyWrapperDescriptionComponent},
    {name: 'validation-message', component: FormlyWrapperValidationMessagesComponent},
    {name: 'fieldset', component: FormlyWrapperFieldsetComponent},
    {name: 'addons', component: FormlyWrapperAddonsComponent},
  ],
  manipulators: [
    {class: TemplateDescription, method: 'run'},
    {class: TemplateValidation, method: 'run'},
    {class: TemplateAddons, method: 'run'},
  ],
};
