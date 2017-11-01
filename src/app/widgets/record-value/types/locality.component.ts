/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DefaultValueComponent } from './default.component';

@Component({
  selector: 'brf-record-value-locality',
  template: `<span class="{{ field.className }}">{{ value | locality }}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocalityValueComponent extends DefaultValueComponent implements OnInit {


}
