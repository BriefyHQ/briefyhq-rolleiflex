/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DefaultValueComponent } from './default.component';

@Component({
  selector: 'brf-record-value-html',
  template: `<div [innerHtml]='value' class="{{ field.className }}"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HTMLValueComponent extends DefaultValueComponent implements OnInit {


}
