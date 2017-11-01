import { Component } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { FieldType, FormlyFieldConfig } from 'ng-formly';

@Component({
  selector: 'formly-field-multicheckbox',
  template: `
    <ng-container *ngFor="let option of to.options" class="checkbox">
      <md-checkbox [value]="option.value" [formControl]="formControl.get(option.key)" [formlyAttributes]="field">
        {{ option.value }}
      </md-checkbox>
    </ng-container>
  `,
})
export class FormlyFieldMultiCheckboxComponent extends FieldType {
  static createControl(model: any, field: FormlyFieldConfig): AbstractControl {
    const controlGroupConfig = field.templateOptions.options.reduce((previous, option) => {
      previous[option.key] = new FormControl(model ? model[option.key] : undefined);
      return previous;
    }, {});

    return new FormGroup(
      controlGroupConfig,
      field.validators ? field.validators.validation : undefined,
      field.asyncValidators ? field.asyncValidators.validation : undefined,
    );
  }
}
