import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';
import { markFormControlErrors } from '../../form/form.helper';
import { ValidationService } from '../../form/validation.service';
import { UserService } from '../services/user.service';
import { IGroup } from '../models/interfaces';
import { User } from '../models/user';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserEditComponent implements OnInit {

  item: User;
  groups: IGroup[];

  form: FormGroup = new FormGroup({});

  protected _displayForm = true;
  protected _feedbackMessage: string[] = [''];

  errorMessage: string;
  actionMessage = 'Update';

  fields: FormlyFieldConfig[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: UserService,
  ) {}

  ngOnInit() {
    this.route.parent.data.forEach(
      (data) => {
        this.item = new User(data.item);
    });
    this.route.data.forEach(
      (data) => {
        this.groups = data.groups.data;
        this.fields = [
          {
            key: 'first_name',
            type: 'input',
            className: 'full-width',
            templateOptions: {
              type: 'text',
              label: 'First name',
              placeholder: 'First name',
              required: true
            },
            validation: { show: false },
          },
          {
            key: 'last_name',
            type: 'input',
            className: 'full-width',
            templateOptions: {
              type: 'text',
              label: 'Last Name',
              placeholder: 'Last Name',
              required: true
            },
            validation: { show: false },
          },
          {
            key: 'email',
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
            key: 'group_ids',
            type: 'select',
            className: 'full-width',
            templateOptions: {
              label: 'Groups',
              placeholder: 'Groups',
              multiple: true,
              options: this.groupsVocab,
              required: true
            },
          },
        ];
    });
  }

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

  get groupsVocab() {
    const groups = this.groups;
    const vocab = [];
    if (groups) {
      for (const group of groups) {
        vocab.push(
          {
            label: group.name,
            value: group.id
          }
        );
      }
    }
    return vocab;
  }

  submit() {
    const id = this.item.id;
    const payload = this.form.value;
    this.dataService.put(id, payload).subscribe(
        data => {
          this.router.navigate([this.item.absolute_url]);
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
        }
    );
  }

}
