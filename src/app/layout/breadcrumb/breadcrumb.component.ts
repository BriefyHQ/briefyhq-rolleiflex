import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, NavigationEnd, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { RoutePartsService } from '../services/route-parts.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {

  public routeParts: any[];
  public isEnabled: boolean;
  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private routePartsService: RoutePartsService,
    private activeRoute: ActivatedRoute
  ) {
    this.isEnabled = true;
  }

  private generateRouteParts(): any[] {
    const routePartsService = this.routePartsService;
    const routeSnapshot = this.activeRoute.snapshot;
    const routeParts: any[] = routePartsService.generateRouteParts(routeSnapshot);
    // generate url from parts
    routeParts.reverse().map(
      (item, i) => {
        item.url = `/${item.url}`;
        return item;
    });
    return routeParts;
  }

  ngOnInit() {
    this.routeParts = this.generateRouteParts();
    this.subscriptions.push(
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.routeParts = this.generateRouteParts();
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => {
        subscription.unsubscribe();
    });
  }

}
