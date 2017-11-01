/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DefaultValueComponent } from './default.component';

@Component({
  selector: 'brf-record-value-country',
  template: `<span class="{{ field.className }}">{{ value | country }}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryValueComponent extends DefaultValueComponent implements OnInit {


}
