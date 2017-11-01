/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DefaultValueComponent } from './default.component';

@Component({
  selector: 'brf-record-value-view',
  template: `<a [routerLink]='[record.absolute_url]' class="view-link {{ field.className }}">{{ value }}</a>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewValueComponent extends DefaultValueComponent implements OnInit {


}
