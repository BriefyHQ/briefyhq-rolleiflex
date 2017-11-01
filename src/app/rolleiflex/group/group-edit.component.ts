import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';
import { markFormControlErrors } from '../../form/form.helper';
import { ValidationService } from '../../form/validation.service';
import { GroupService } from '../services/group.service';
import { Group } from '../models/group';


@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupEditComponent implements OnInit {

  item: Group;

  form: FormGroup = new FormGroup({});

  protected _displayForm = true;
  protected _feedbackMessage: string[] = [''];

  errorMessage: string;
  actionMessage = 'Update';

  fields: FormlyFieldConfig[] = [
    {
      key: 'slug',
      type: 'input',
      className: 'full-width',
      templateOptions: {
        type: 'text',
        label: 'Group slug',
        placeholder: 'Group slug',
        disabled: true,
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
    this.route.parent.data.forEach(
      (data) => {
        this.item = new Group(data.item);
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

  submit() {
    const id = this.item.id;
    const payload = this.form.value;
    delete(payload['slug']);
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
