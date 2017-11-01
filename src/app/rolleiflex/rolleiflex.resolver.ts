import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ISummary, IAPIList } from '../models/api';
import { GroupService } from './services/group.service';
import { UserService } from './services/user.service';


@Injectable()
export class UserListResolver implements Resolve<IAPIList> {

  constructor(private dataService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAPIList> {
    const params = {};
    const queryParams = route.queryParams;
    if (queryParams) {
      for (const key in queryParams) {
        if (queryParams.hasOwnProperty(key)) {
          params[key] = queryParams[key];
        }
      }
    }
    const routeQueryParams = route.data['queryParams'];
    if (routeQueryParams) {
      for (const key in routeQueryParams) {
        if (routeQueryParams.hasOwnProperty(key)) {
          params[key] = routeQueryParams[key];
        }
      }
    }
    return this.dataService.list(params);
  }
}


@Injectable()
export class UserItemResolver implements Resolve<ISummary> {

  constructor(private dataService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISummary> {
    const id = route.params['id'];
    return this.dataService.get(id);
  }
}


@Injectable()
export class GroupListResolver implements Resolve<IAPIList> {

  constructor(private dataService: GroupService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAPIList> {
    const params = {};
    const queryParams = route.queryParams;
    if (queryParams) {
      for (const key in queryParams) {
        if (queryParams.hasOwnProperty(key)) {
          params[key] = queryParams[key];
        }
      }
    }
    const routeQueryParams = route.data['queryParams'];
    if (routeQueryParams) {
      for (const key in routeQueryParams) {
        if (routeQueryParams.hasOwnProperty(key)) {
          params[key] = routeQueryParams[key];
        }
      }
    }
    return this.dataService.list(params);
  }
}


@Injectable()
export class GroupItemResolver implements Resolve<ISummary> {

  constructor(private dataService: GroupService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISummary> {
    const id = route.params['id'];
    return this.dataService.get(id);
  }
}

