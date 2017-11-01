/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DefaultValueComponent } from './default.component';

@Component({
  selector: 'brf-record-value-json',
  template: `<pre class="{{ field.className }}">{{ value | json }}</pre>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JSONValueComponent extends DefaultValueComponent implements OnInit {


}
