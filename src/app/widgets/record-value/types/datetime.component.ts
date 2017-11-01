/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DateValueComponent } from './date.component';

@Component({
  selector: 'brf-record-value-datetime',
  template: `<span class="{{ field.className }}">{{ value }}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateTimeValueComponent extends DateValueComponent implements OnInit {

  protected format = 'DD/MM/YYYY HH:mm';

}
