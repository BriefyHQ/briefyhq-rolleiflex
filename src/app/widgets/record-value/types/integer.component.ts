/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DefaultValueComponent } from './default.component';

@Component({
  selector: 'brf-record-value-integer',
  template: `<span class="right-align {{ field.className }}">{{ value | number: '1.0-0' }}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntegerValueComponent extends DefaultValueComponent implements OnInit {


}
