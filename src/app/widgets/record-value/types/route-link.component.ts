/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DefaultValueComponent } from './default.component';

@Component({
  selector: 'brf-record-value-route-link',
  template: `<a [routerLink]='[value]' class="view-link {{ field.className }}">{{ label }}</a>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteLinkValueComponent extends DefaultValueComponent implements OnInit {

  get label() {
    let value = '';
    const label = this.field.label;
    const labelFactory = this.field.labelFactory;
    if ((label !== undefined) && (label !== ' ') && (label !== null)) {
      value = label;
    } else if ((labelFactory !== undefined) && (labelFactory !== ' ') && (labelFactory !== null)) {
      value = this.record.get(labelFactory);
    }
    return value;
  }

}
