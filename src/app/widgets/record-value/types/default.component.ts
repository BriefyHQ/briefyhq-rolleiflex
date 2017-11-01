/* tslint:disable:no-access-missing-member */
import { Component, Input, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'brf-record-value-default',
  template: `<span class="{{ field.className }}">{{ value }}</span>`,
  styleUrls: ['./default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultValueComponent implements OnInit {

  @Input() record: any;
  @Input() field: any;

  get value() {
    let value: any;
    if (this.record.get !== undefined) {
      value = this.record.get(this.field.accessor);
    } else {
      value = this.record[this.field.accessor];
    }
    return value;
  }

  get label() {
    let value = '';
    if (this.field.label) {
      value = this.field.label;
    } else if (this.field.labelFactory) {
      value = this.record.get(this.field.labelFactory);
    }
    return value;
  }

  ngOnInit() {
    const field = this.field;
    if (!field.hasOwnProperty('accessor')) {
      field.accessor = field.field;
    }
  }

}
