/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DefaultValueComponent } from './default.component';

@Component({
  selector: 'brf-record-value-download',
  template: `<span class="{{ field.className }}">
    <a href="{{ value }}" title="{{ field['name'] }}" target="_blank">
      <i class="material-icons">cloud_download</i>
    </a>
  </span>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DownloadValueComponent extends DefaultValueComponent implements OnInit {


}
