import { Component } from '@angular/core';
import { FieldType } from 'ng-formly';

export class SelectOption {
  label: string;
  value?: string;
  group?: SelectOption[];
  disabled?: boolean;

  constructor(label: string, value?: string, children?: SelectOption[]) {
    this.label = label;
    this.value = value;
    this.group = children;
  }
}

@Component({
  selector: 'formly-field-select',
  template: `
    <md-select [formControl]="formControl"
        class="form-control" [formlyAttributes]="field"
        [multiple]="to.multiple"
        [placeholder]="to.placeholder">
      <ng-container *ngFor="let item of selectOptions">
       <md-option *ngIf="!item.group" [value]="item.value" [disabled]="item.disabled">{{ item.label }}</md-option>
       <optgroup *ngIf="item.group" label="{{item.label}}">
        <md-option *ngFor="let child of item.group" [value]="child.value" [disabled]="item.disabled">
          {{ child.label }}
        </md-option>
       </optgroup>
      </ng-container>
    </md-select>
  `,
})
export class FormlyFieldSelectComponent extends FieldType {

  get labelProp(): string { return this.to.labelProp || 'label'; }
  get valueProp(): string { return this.to.valueProp || 'value'; }
  get groupProp(): string { return this.to.groupProp || 'group'; }

  get selectOptions() {
    const options: SelectOption[] = [];
    this.to.options.map(
      (option: SelectOption) => {
        if (!option[this.groupProp]) {
          options.push(option);
        } else {
          const filteredOption: SelectOption[] = options.filter(
            (item) => {
              return item.label === option[this.groupProp];
            }
          );
          if (filteredOption[0]) {
            filteredOption[0].group.push(
              {
                label: option[this.labelProp],
                value: option[this.valueProp],
              }
            );
          } else {
            options.push({
              label: option[this.groupProp],
              group: [{ value: option[this.valueProp], label: option[this.labelProp] }],
            });
          }
        }
      }
    );
    return options;
  }
}
