import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';
import { markFormControlErrors } from '../../form/form.helper';
import { ValidationService } from '../../form/validation.service';
import { GroupService } from '../services/group.service';
import { Group } from '../models/group';


@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupAddComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  protected _displayForm = true;
  protected _feedbackMessage: string[] = [''];

  errorMessage: string;
  actionMessage = 'Add';

  fields: FormlyFieldConfig[] = [
    {
      key: 'slug',
      type: 'input',
      className: 'full-width',
      defaultValue: 'g:',
      templateOptions: {
        type: 'text',
        label: 'Group slug',
        placeholder: 'Group slug',
        required: true,
      },
    },
    {
      key: 'name',
      type: 'input',
      className: 'full-width',
      templateOptions: {
        type: 'text',
        label: 'Group name',
        placeholder: 'Group name',
        required: true
      },
      validation: { show: false },
    },
    {
      key: 'description',
      type: 'input',
      className: 'full-width',
      templateOptions: {
        type: 'text',
        label: 'Description',
        placeholder: 'Description',
        required: false
      },
      validation: { show: false },
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: GroupService,
  ) {}

  ngOnInit() {
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

  submit() {
    const payload = this.form.value;
    this.dataService.post(payload).subscribe(
        data => {
          this.router.navigate(['/groups', data['id']]);
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
