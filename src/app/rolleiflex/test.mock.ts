import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {
  MdIconModule,
  MdButtonModule,
  MdMenuModule,
  MdChipsModule,
  MdExpansionModule,
  MdCardModule
} from '@angular/material';

import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TranslateModule } from '@ngx-translate/core';

import { User } from '../auth/models/user';
import { AuthService } from '../auth/services/auth.service';
import { AuthModule } from '../auth/auth.module';


export function tokenGetter(): string {
  // tslint:disable-next-line
  return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJmdWxsbmFtZSI6IkFyaWFuYSBTaGF1aCIsImZpcnN0X25hbWUiOiJBcmlhbmEiLCJsYXN0X25hbWUiOiJTaGF1aCIsImVtYWlsIjoiYXJpYW5hQGJyaWVmeS5jbyIsImxvY2FsZSI6ImVuX0dCIiwiZ3JvdXBzIjpbImc6YnJpZWZ5IiwiZzpicmllZnlfcG0iLCJnOmJyaWVmeV9xYSIsImc6YnJpZWZ5X3Njb3V0Il0sInByb3ZpZGVyIjoiZW1haWwiLCJzdWIiOiJlYjFhOGMxZi1jOWQ3LTQ4NTQtYWJmNi0wM2FlMmFlYTkwZGUiLCJpYXQiOjE1MDY0MjA4NTksImV4cCI6MTUwNjUwNTQ1OX0.tEteHLCXbSSe7kg7-puxn85IzvO-9O4YblNJnex8PcfvMDSEU3vbVz4YDo8rPgADt9CRWUprGAMStOj1fXDY2A';
}

class MockAuthService extends AuthService {

  get user(): User|null {
    const token = this.token;
    return this.extractUserInfoFromToken(token);
  }
}


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdChipsModule,
    MdExpansionModule,
    MdCardModule,
    AuthModule,
    HttpClientTestingModule,
    JwtModule.forRoot({config: {tokenGetter: tokenGetter}}),
    TranslateModule.forRoot({}),
    RouterTestingModule.withRoutes([{ path: '', children: [] }])
  ],
  exports: [
    AuthModule,
    JwtModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdChipsModule,
    MdExpansionModule,
    MdCardModule,
    TranslateModule,
    HttpClientTestingModule,
    BrowserAnimationsModule,
    RouterTestingModule
  ],
  providers: [
    { provide: AuthService, useClass: MockAuthService },
  ]
})
export class TestModule {
}
