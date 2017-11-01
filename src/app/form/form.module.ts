import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from 'ng-formly';
import { BRIEFY_FORMLY_CONFIG } from './form.config';
import { MaterialUiModule } from './material-ui';

@NgModule({
  providers: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(BRIEFY_FORMLY_CONFIG),
    MaterialUiModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    MaterialUiModule
  ]
})
export class FormModule { }
