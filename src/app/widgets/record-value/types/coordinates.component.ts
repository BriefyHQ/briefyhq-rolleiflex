/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DefaultValueComponent } from './default.component';

@Component({
  selector: 'brf-record-value-coordinates',
  template: `
  <span class="{{ field.className }}">
    <agm-map [latitude]="value[0]" [longitude]="value[1]" [scrollwheel]="scrollwheel">
      <agm-marker [latitude]="value[0]" [longitude]="value[1]"></agm-marker>
    </agm-map>
  </span>
  `,
  styleUrls: ['./coordinates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoordinatesValueComponent extends DefaultValueComponent implements OnInit {

  scrollwheel = false;

}
