/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DefaultValueComponent } from './default.component';

@Component({
  selector: 'brf-record-value-links',
  template: `
  <div class="{{ field.className }}">
    <li class="chip" *ngFor="let link of value">
      <a [href]="link.url" target="_new" [title]="link.name">
        <i class="fa {{ link.icon }}" aria-hidden="true"></i>{{ link.name }}
      </a>
    </li>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinksValueComponent extends DefaultValueComponent implements OnInit {


}
