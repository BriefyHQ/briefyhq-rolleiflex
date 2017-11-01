import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';
import { markFormControlErrors } from '../../form/form.helper';
import { ValidationService } from '../../form/validation.service';
import { IAuthResponse, IResetPassword } from '../../auth/models/api.interface';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-reset-password',
  templateUrl: '../base/base.component.html',
  styleUrls: ['../base/base.component.scss']
})
export class ResetPasswordComponent extends BaseComponent implements OnInit {

  titleMessage = 'auth.reset.title';
  actionMessage = 'auth.reset.actionMessage';
  routeActions = [{ route: '../login', title: 'auth.reset.routes.login'}];
  model: IResetPassword = {code: '', password: '', confirm_password: ''};
  fields: FormlyFieldConfig[] = [
    {
      key: 'code',
      type: 'input',
      templateOptions: {type: 'hidden'}
    },
    {
      key: 'password',
      type: 'input',
      className: 'login-form-input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'New password',
        required: true
      },
      validation: { show: false, },
      validators: {
        validation: Validators.compose([Validators.required, ValidationService.passwordValidator])
      }
    },
    {
      key: 'confirm_password',
      type: 'input',
      className: 'login-form-input',
      templateOptions: {
        type: 'password',
        label: 'Confirm Password',
        placeholder: 'Repeat your new password',
        required: true
      },
      validation: { show: false, },
      validators: {
        validation: Validators.compose(
          [
            Validators.required,
            ValidationService.passwordValidator,
            ValidationService.confirmPassword(this.form, 'password')
          ]
        )
      }
    },
  ];

  get feedbackMessage(): string[] {
    return ['auth.reset.feedback.line1'];
  }

  submit() {
    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
    this.userService.resetPassword(this.model).subscribe(
        data => {
          this.progressBar.mode = 'determinate';
          this._displayForm = false;
        },
        error => {
          const status = error.status;
          const errorData = error.error;
          if (status === 404) {
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

  ngOnInit() {
    this.model.code = this.route.snapshot.params['code'];
  }

}
