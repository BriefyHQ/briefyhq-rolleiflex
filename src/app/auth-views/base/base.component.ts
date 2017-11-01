import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdProgressBar, MdButton } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';
import { UserService } from '../../auth/services/user.service';
import { IAuthResponse } from '../../auth/models/api.interface';

export interface IAuthAction {
  route: string;
  title: string;
}


@Component({
  selector: 'app-auth-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  @ViewChild(MdProgressBar) progressBar: MdProgressBar;
  @ViewChild(MdButton) submitButton: MdButton;

  protected _displayForm = true;
  protected _feedbackMessage: string[] = [''];

  model: any = {};

  titleMessage = 'Authentication';
  actionMessage = 'Action';
  errorMessage: string;
  routeActions: IAuthAction[] = [];


  form: FormGroup = new FormGroup({});

  fields: FormlyFieldConfig[];

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected userService: UserService
  ) { }

  ngOnInit() { }

  get isEnabled(): boolean {
    const isFormValid = this.form.valid;
    const isFormDirty = this.form.dirty;
    const flag = (isFormValid && isFormDirty);
    if (flag && this.errorMessage) {
      this.errorMessage = '';
    }
    return flag;
  }

  get displayErrorMessage(): boolean {
    if (this.errorMessage && !this.isEnabled) {
      return true;
    }
    return false;
  }

  get displayForm(): boolean {
    return this._displayForm;
  }

  get feedbackMessage(): string[] {
    return this._feedbackMessage;
  }

  submit() {
    // To be implemented
  }

}
