/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DateTimeValueComponent } from './datetime.component';

@Component({
  selector: 'brf-record-value-local-datetime',
  template: `
  <span class="{{ field.className }}">
    <ng-container *ngIf="value">
      {{ value }}
      <span *ngIf="field.showLabel">(Local time)</span>
    </ng-container>
  </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocalDateTimeValueComponent extends DateTimeValueComponent implements OnInit {


}
