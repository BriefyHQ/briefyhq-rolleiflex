/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DefaultValueComponent } from './default.component';

@Component({
  selector: 'brf-record-value-text',
  template: `<span class="{{ field.className }}">{{ value | translate }}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextValueComponent extends DefaultValueComponent implements OnInit {


}
