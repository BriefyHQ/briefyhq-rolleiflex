import { environment } from '../../../environments/environment';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import * as domHelper from '../dom.helper';

interface ILanguage {
  name: string;
  code: string;
}


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Input() sidenav;
  @Output() onLangChange = new EventEmitter<any>();

  currentLang = environment.features.language.default;
  enableLanguageSelection = false;
  enableSearch = false;
  availableLangs: ILanguage[] = [
    { name: 'English', code: 'en'},
  ];

  constructor() { }

  ngOnInit() { }

  setLang() {
    this.onLangChange.emit(this.currentLang);
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
  toggleCollapse() {
    const appBody = document.body;
    domHelper.toggleClass(appBody, 'collapsed-menu');
    domHelper.removeClass(document.getElementsByClassName('has-submenu'), 'open');
  }
}
