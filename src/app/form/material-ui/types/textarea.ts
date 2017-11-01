import { Component } from '@angular/core';
import { FieldType } from 'ng-formly';

@Component({
  selector: 'formly-field-textarea',
  template: `
  <md-form-field>
    <textarea mdInput
      [name]="key"
      [formControl]="formControl"
      [cols]="to.cols"
      [rows]="to.rows"
      [formlyAttributes]="field"
    >
    </textarea>
  </md-form-field>
  `,
})
export class FormlyFieldTextAreaComponent extends FieldType {
}
