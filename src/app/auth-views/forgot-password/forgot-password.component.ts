import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';
import { markFormControlErrors } from '../../form/form.helper';
import { ValidationService } from '../../form/validation.service';
import { IAuthResponse, IForgotPassword } from '../../auth/models/api.interface';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-forgot-password',
  templateUrl: '../base/base.component.html',
  styleUrls: ['../base/base.component.scss']
})
export class ForgotPasswordComponent extends BaseComponent implements OnInit {

  titleMessage = 'auth.forgot.title';
  actionMessage = 'auth.forgot.actionMessage';
  routeActions = [
    { route: '../login', title: 'auth.forgot.routes.login'}
  ];
  model: IForgotPassword = {username: ''};
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
    }
  ];

  get feedbackMessage(): string[] {
    return [
      'auth.forgot.feedback.line1',
      `${this.model.username}`,
      'auth.forgot.feedback.line3'
    ];
  }

  submit() {
    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
    this.userService.forgotPassword(this.model).subscribe(
        data => {
          this.progressBar.mode = 'determinate';
          this._displayForm = false;
        },
        error => {
          const status = error.status;
          const errorData = error.error;
          if (status === 400) {
            const formControls = this.form.controls;
            const errors = errorData.errors;
            markFormControlErrors(formControls, errors);
          } else {
            this.errorMessage = 'errors.retry';
          }
          this.submitButton.disabled = false;
          this.progressBar.mode = 'determinate';
        }
      );
  }

}
