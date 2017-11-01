/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DefaultValueComponent } from './default.component';

@Component({
  selector: 'brf-record-value-date',
  template: `<span class="{{ field.className }}">{{ value }}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateValueComponent extends DefaultValueComponent implements OnInit {

  protected format = 'DD/MM/YYYY';

  get value() {
    let value: any;
    if (this.record.get !== undefined) {
      value = this.record.get(this.field.accessor);
    } else {
      value = this.record[this.field.accessor];
    }
    if (value) {
      value = value.format(this.format);
    }
    return value;
  }

}
