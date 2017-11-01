import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from 'ng-formly';

@Component({
  selector: 'formly-wrapper-validation-messages',
  template: `
    <ng-container #fieldComponent></ng-container>
    <small class="form-error-msg" *ngIf="showError" role="alert" [id]="validationId">
      <formly-validation-message [fieldForm]="formControl" [field]="field"></formly-validation-message>
    </small>
  `,
})
export class FormlyWrapperValidationMessagesComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;

  get validationId() {
    return this.field.id + '-message';
  }
}
