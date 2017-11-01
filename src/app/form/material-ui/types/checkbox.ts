import { Component } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { FieldType, FormlyFieldConfig } from 'ng-formly';

@Component({
  selector: 'formly-field-checkbox',
  template: `
    <md-checkbox [formControl]="formControl" *ngIf="!to.hidden" value="on" [formlyAttributes]="field">
      {{ to.label }}
    </md-checkbox>
  `,
})
export class FormlyFieldCheckboxComponent extends FieldType {
  static createControl(model: any, field: FormlyFieldConfig): AbstractControl {
    return new FormControl(
      { value: model ? 'on' : undefined, disabled: field.templateOptions.disabled },
      field.validators ? field.validators.validation : undefined,
      field.asyncValidators ? field.asyncValidators.validation : undefined,
    );
  }
}
