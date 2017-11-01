/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DefaultValueComponent } from './default.component';

@Component({
  selector: 'brf-record-value-boolean',
  template: `
  <div class="{{ field.className }}">
    <i class="material-icons green-text" *ngIf="value">check_circle</i>
    <i class="material-icons red-text lighten-2" *ngIf="!value">cancel</i>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooleanValueComponent extends DefaultValueComponent implements OnInit {


}
