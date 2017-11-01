/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DefaultValueComponent } from './default.component';

@Component({
  selector: 'brf-record-value-text-style',
  template: `<span class="{{ field.className }} {{ record.get(field.field) }}">{{ value | translate }}{{ flag }}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextStyleValueComponent extends DefaultValueComponent implements OnInit {

  get flag(): string {
    let value = '';
    const additionalFlag = this.field.additionalFlag;
    if ((additionalFlag !== undefined)) {
      const hasFlag = this.record.get(additionalFlag);
      if (hasFlag) {
        value = ' *';
      }
    }
    return value;
  }

}
