import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, ActivatedRouteSnapshot, Params, PRIMARY_OUTLET } from '@angular/router';

interface IRoutePart {
  title: string,
  breadcrumb: string,
  params?: Params,
  url: string,
}

@Injectable()
export class RoutePartsService {

  public routeParts: IRoutePart[];

  constructor(
    private router: Router
  ) {}

  generateRouteParts(snapshot: ActivatedRouteSnapshot): IRoutePart[] {
    let routeParts = <IRoutePart[]>[];
    if (snapshot) {
      const snapShotData = snapshot.data;
      let snapshotTitle = snapShotData['title'];
      if (snapshot.firstChild) {
        const newParts = this.generateRouteParts(snapshot.firstChild);
        routeParts = routeParts.concat(newParts);
      }
      if (snapshotTitle && snapshot.url.length) {
        let snapshotBreadcrumb = snapShotData['breadcrumb'];
        // This is Leica-specific. If we have an item on the snapshot data and
        // this item has a title, use it for the breadcrumb
        if (snapShotData['item'] && snapShotData['item'].hasOwnProperty('title')) {
          snapshotTitle = snapShotData['item']['title'];
          snapshotBreadcrumb = snapshotTitle;
        }
        const urlParts: string[] = snapshot.pathFromRoot.map(
          item => {
            if (item.url.length) {
              return item.url[0].path;
            }
          }
        ).filter(item => item !== undefined);
        const part =           {
            title: snapshotTitle,
            breadcrumb: snapshotBreadcrumb,
            url: urlParts.join('/')
          }
        routeParts.push(part);
      }
    }
    return routeParts.sort(
      (a, b): number => {
        // Reverse the array, using the url.length as key
        if ((a.url.length) < (b.url.length)) {
          return 1;
        } else if ((a.url.length) > (b.url.length)) {
          return -1;
        } else {
          return 0;
        }
      }
    );
  }
}
