import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  private isAuthenticated = true;

  protected routeBasePath = '/auth';
  protected unauthorizedRoute = '/errors/401.html';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  private checkRoles(route: ActivatedRouteSnapshot): boolean {
    let allowed = true;
    const roles = route.data['roles'];
    if (roles !== undefined) {
      allowed = false;
      const userRoles = this.authService.userRoles;
      for (const role of userRoles) {
        allowed = allowed || (roles.indexOf(role.id) > -1);
      }
    }
    return allowed;
  }

  private doChecks(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.authService.isAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate([`${this.routeBasePath}/login`]);
    }
    if (!this.checkRoles(route)) {
      this.router.navigate([`${this.unauthorizedRoute}`]);
    }
    return true;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.doChecks(route, state);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.doChecks(route, state);
  }
}
