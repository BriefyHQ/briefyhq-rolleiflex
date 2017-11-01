import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
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

// Translate
import { TranslateModule } from '@ngx-translate/core';

// Form
import { FormModule } from '../form/form.module';

// AuthRouter
import { AuthRoutingModule } from './auth-routing.module';

// Views
import { BaseComponent } from './base/base.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  imports: [
    CommonModule,
    MdProgressBarModule,
    MdButtonModule,
    MdInputModule,
    MdSelectModule,
    MdRadioModule,
    MdFormFieldModule,
    MdCardModule,
    MdCheckboxModule,
    TranslateModule,
    FormModule,
    AuthRoutingModule
  ],
  declarations: [
    BaseComponent,
    LoginComponent,
    LogoutComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  exports: [
    LoginComponent,
    LogoutComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ]
})
export class AuthViewsModule { }
