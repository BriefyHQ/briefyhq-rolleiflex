import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';
import { markFormControlErrors } from '../../form/form.helper';
import { ValidationService } from '../../form/validation.service';
import { IAuthResponse, IEmailLogin } from '../../auth/models/api.interface';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-login',
  templateUrl: '../base/base.component.html',
  styleUrls: ['../base/base.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  titleMessage = 'auth.login.title';
  actionMessage = 'auth.login.actionMessage';
  routeActions = [
    { route: '../forgot-password', title: 'auth.login.routes.forgot'}
  ];
  model: IEmailLogin = {username: '', password: ''};
  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      className: 'full-width',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'Email',
        required: true
      },
      validation: { show: false },
      validators: {
        validation: Validators.compose([Validators.required, ValidationService.emailValidator])
      }
    },
    {
      key: 'password',
      type: 'input',
      className: 'full-width',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Password',
        required: true
      },
      validation: { show: false },
      validators: {
        validation: Validators.compose([Validators.required, ValidationService.passwordValidator])
      }
    }
  ];

  submit() {
    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
    this.userService.emailLogin(this.model).subscribe(
        data => {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/']);
        },
        error => {
          const status = error.status;
          const errorData = error.error;
          if (status === 401) {
            this.errorMessage = errorData.message;
            this.form.markAsPristine();
          } else if (status === 400) {
            const formControls = this.form.controls;
            const errors = errorData.errors;
            markFormControlErrors(formControls, errors);
          }
          this.submitButton.disabled = false;
          this.progressBar.mode = 'determinate';
        }
      );
  }

}
