import { Component } from '@angular/core';
import { FieldType } from 'ng-formly';

@Component({
  selector: 'formly-field-radio',
  template: `
    <md-radio-group [formGroup]="form">
      <ng-container *ngFor="let option of to.options" >
      <md-radio-button
       [value]="option.key"
       [name]="id"
       [value]="option.key"
       [formControl]="formControl"
       [formlyAttributes]="field"
      >
        {{ option.value }}
      </md-radio-button>
      </ng-container>
    </md-radio-group>
  `,
})
export class FormlyFieldRadioComponent extends FieldType {}
