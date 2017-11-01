import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from 'ng-formly';

@Component({
  selector: 'formly-wrapper-fieldset',
  template: `
    <ng-container #fieldComponent></ng-container>
  `,
})
export class FormlyWrapperFieldsetComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
