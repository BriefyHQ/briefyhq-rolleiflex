import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestBed, inject } from '@angular/core/testing';
import { JwtModule } from '@auth0/angular-jwt';

import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class TestModule {
}

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        JwtModule.forRoot({config: {}}),
        TestModule
      ],
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
