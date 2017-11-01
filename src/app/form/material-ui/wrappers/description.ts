import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from 'ng-formly';

@Component({
  selector: 'formly-wrapper-description',
  template: `
    <ng-container #fieldComponent></ng-container>
    <small class="text-muted">{{ to.description }}</small>
  `,
})
export class FormlyWrapperDescriptionComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
