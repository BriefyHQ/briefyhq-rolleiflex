import { Component } from '@angular/core';
import { FieldType } from 'ng-formly';

@Component({
  selector: 'formly-field-input',
  template: `
    <md-input-container class="full-width" *ngIf="!isHidden">
      <input
        mdInput
        [type]="type"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [placeholder]="to.placeholder"
        [ngClass]="{'form-control-danger': showError}"
        value="">
    </md-input-container>
    <input
      type="hidden"
      [formControl]="formControl"
      [formlyAttributes]="field"
       *ngIf="isHidden"
      value="">
    `,
})
export class FormlyFieldInputComponent extends FieldType {

  get isHidden(): boolean {
    return this.type === 'hidden' ? true : false;
  }

  get type(): string {
    return this.to.type || 'text';
  }
}
