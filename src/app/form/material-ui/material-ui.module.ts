import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from 'ng-formly';
import {
  MdProgressBarModule,
  MdButtonModule,
  MdInputModule,
  MdSelectModule,
  MdRadioModule,
  MdFormFieldModule,
  MdCardModule,
  MdCheckboxModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MATERIAL_FORMLY_CONFIG, FIELD_TYPE_COMPONENTS } from './material-ui.config';
import { FormlyValidationMessageComponent } from './formly.validation-message';

@NgModule({
  declarations: [...FIELD_TYPE_COMPONENTS, FormlyValidationMessageComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MdProgressBarModule,
    MdButtonModule,
    MdInputModule,
    MdSelectModule,
    MdRadioModule,
    MdFormFieldModule,
    MdCardModule,
    MdCheckboxModule,
    FlexLayoutModule,
    FormlyModule.forRoot(
      MATERIAL_FORMLY_CONFIG
    ),
  ],
})
export class MaterialUiModule { }
