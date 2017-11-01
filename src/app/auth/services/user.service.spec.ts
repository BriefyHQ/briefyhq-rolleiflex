import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestBed, inject } from '@angular/core/testing';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientTestingModule
  ],
})
export class TestModule {
}

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        JwtModule.forRoot({config: {}}),
        TestModule
      ],
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
