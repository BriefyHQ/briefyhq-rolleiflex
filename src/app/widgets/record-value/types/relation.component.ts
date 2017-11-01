/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DefaultValueComponent } from './default.component';

@Component({
  selector: 'brf-record-value-relation',
  template: `
  <span class="right-align {{ field.className }}">
    <a [routerLink]='[record.get(field.relationUrl)]' class="relation-link {{ field.className }}">{{ value }}</a>
  </span>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelationValueComponent extends DefaultValueComponent implements OnInit {


}
