import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

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

import { JwtModule } from '@auth0/angular-jwt';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormModule } from '../form/form.module';

import { TranslateModule } from '@ngx-translate/core';

import { AuthService } from '../auth/services/auth.service';
import { UserService } from '../auth/services/user.service';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdProgressBarModule,
    MdButtonModule,
    MdInputModule,
    MdSelectModule,
    MdRadioModule,
    MdFormFieldModule,
    MdCardModule,
    MdCheckboxModule,
    HttpClientTestingModule,
    JwtModule.forRoot({config: {}}),
    TranslateModule.forRoot({}),
    FormModule,
    RouterTestingModule.withRoutes([{ path: '', children: [] }])
  ],
  exports: [
    MdProgressBarModule,
    MdButtonModule,
    MdInputModule,
    MdSelectModule,
    MdRadioModule,
    MdFormFieldModule,
    MdCardModule,
    MdCheckboxModule,
    FormModule,
    JwtModule,
    TranslateModule,
    HttpClientTestingModule,
    BrowserAnimationsModule,
    RouterTestingModule
  ],
  providers: [
    AuthService,
    UserService
  ]
})
export class TestModule {
}
