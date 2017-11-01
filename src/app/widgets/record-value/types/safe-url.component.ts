/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DefaultValueComponent } from './default.component';

@Component({
  selector: 'brf-record-value-safe-url',
  template: `
  <span class="{{ field.className }}" *ngIf="trustedValue">
    <a [href]="trustedValue" [title]="field['name']" target="_blank">
      <i class="material-icons" *ngIf="!trustedValueIcon">open_in_browser</i>
      <img *ngIf="trustedValueIcon" [src]="'/assets/images/url/' + trustedValueIcon" />
    </a>
  </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SafeURLValueComponent extends DefaultValueComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {
    super();
  }

  get trustedValue() {
    if (this.value) {
      return this.sanitizer.bypassSecurityTrustUrl(this.value);
    }
  }

  get trustedValueIcon() {
    const value = this.value;
    let iconUrl = '';
    if (value) {
      if (value.indexOf('drive.google') > -1 ) {
        iconUrl = 'gdrive.png';
      } else if (value.indexOf('sftp://') > -1 ) {
        iconUrl = 'sftp.png';
      }
    }
    return iconUrl;
  }

}
