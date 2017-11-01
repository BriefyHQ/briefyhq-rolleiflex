import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { MdSidenav } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/Subscription';
import * as Ps from 'perfect-scrollbar';
import * as domHelper from '../dom.helper';
import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../auth/models/user';


@Component({
  selector: 'app-layout-complete',
  templateUrl: './layout-complete.component.html',
  styleUrls: ['./layout-complete.component.scss']
})
export class LayoutCompleteComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  private isMobile;
  user: User;
  screenSizeWatcher: Subscription;
  isSidenavOpen = true;
  displayLoading = false;
  url: string;

  @ViewChild(MdSidenav) private sideNave: MdSidenav;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private authService: AuthService
  ) {
    this.subscriptions.push(
      router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          this.displayLoading = true;
        } if ((event instanceof NavigationEnd) || (event instanceof NavigationCancel) || (event instanceof NavigationError)) {
          this.url = event.url;
          if (this.isNavOver()) {
            this.sideNave.close()
          }
          this.displayLoading = false;
        }
      })
    );
    // Translator init
    // const browserLang: string = translate.getBrowserLang();
    translate.use('en');
  }

  ngOnInit() {
    // Initialize Perfect scrollbar for sidenav
    const navigationHold = document.getElementById('scroll-area');
    Ps.initialize(navigationHold, {
      suppressScrollX: true
    });
    this.user = this.authService.user;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => {
        subscription.unsubscribe();
    });
  }

  isNavOver() {
    if (this.url === '/inbox') {
      return true;
    } else {
      return window.matchMedia(`(max-width: 960px)`).matches;
    }
  }
}
