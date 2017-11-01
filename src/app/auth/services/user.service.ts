import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

import {
  IAPIError,
  IAuthResponse,
  IChangePassword,
  IEmailLogin,
  IForgotPassword,
  IResetPassword,
  IUserData,
} from '../models/api.interface';


@Injectable()
export class UserService {

  private baseEndpoint: string;

  constructor(
    protected http: HttpClient
  ) {
    this.baseEndpoint = environment.api.rolleiflex;
  }

  emailLogin(credentials: IEmailLogin): Observable<IAuthResponse> {
    const endpoint = 'login/email';
    return this.http.post<IAuthResponse>(`${this.baseEndpoint}/${endpoint}`, credentials);
  }

  forgotPassword(payload: IForgotPassword): Observable<IAuthResponse> {
    const endpoint = 'password/forgot';
    return this.http.post<IAuthResponse>(`${this.baseEndpoint}/${endpoint}`, payload);
  }

  changePassword(payload: IChangePassword): Observable<IAuthResponse> {
    const endpoint = 'password/change';
    return this.http.post<IAuthResponse>(`${this.baseEndpoint}/${endpoint}`, payload);
  }

  resetPassword(payload: IResetPassword): Observable<IAuthResponse> {
    const endpoint = 'password/reset';
    return this.http.post<IAuthResponse>(`${this.baseEndpoint}/${endpoint}`, payload);
  }

}
