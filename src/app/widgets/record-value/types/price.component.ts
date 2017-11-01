/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DefaultValueComponent } from './default.component';

@Component({
  selector: 'brf-record-value-price',
  template: `
  <span class="{{ field.className }}">
    <span *ngIf="field.showLabel">{{ record.get(field.currencyField) }}</span>
    {{ value | price }}
  </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceValueComponent extends DefaultValueComponent implements OnInit {


}
