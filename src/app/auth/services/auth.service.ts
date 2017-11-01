import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user';
import { UserRole } from '../models/user-role';


@Injectable()
export class AuthService {

  private _token = '';
  private _user: User|null = null;
  private _internalUser = false;

  private userSource = new Subject<User|null>();
  userData: Observable<User|null> = this.userSource.asObservable();

  constructor(
    public jwtHelper: JwtHelperService
  ) {}

  protected extractUserInfoFromToken(token: string): User {
    const tokenPayload = this.jwtHelper.decodeToken(token);
    const user = new User(
      {
        fullname: tokenPayload.fullname,
        first_name: tokenPayload.first_name,
        last_name: tokenPayload.last_name,
        email: tokenPayload.email,
        locale: tokenPayload.locale,
        groups: tokenPayload.groups,
      }
    );
    return user;
  }

  private computeUserRoles(user: User): UserRole[] {
    const roles: UserRole[] = [];
    const groups = user.groups || [];
    const briefyPrefix = 'g:briefy_';
    for (const idx in groups) {
      if (groups.hasOwnProperty(idx)) {
        const groupName = groups[idx];
        let roleId = '';
        if (groupName.indexOf(briefyPrefix) === 0) {
          roleId = groupName.replace(briefyPrefix, 'r:');
        } else {
          roleId = groupName.replace('g:', 'r:');
        }
        if (groupName !== 'g:briefy') {
          roles.push(new UserRole(roleId));
        } else {
          this._internalUser = true;
        }
      }
    }
    roles.push(new UserRole('r:user'));
    return roles;
  }

  private eraseToken(): void {
    localStorage.removeItem('token');
    this._token = '';
    this._user = null;
    this._internalUser = false;
    this.userSource.next(this._user);
  }

  private isValidToken(token: string): boolean {
    let isValid = false;
    if (token) {
      isValid = this.jwtHelper.isTokenExpired(token) ? false : true;
      if (!isValid) {
        this.eraseToken();
      } else {
        this._user = this.extractUserInfoFromToken(token);
      }
    }
    return isValid;
  }

  logout(): void {
    this.eraseToken();
  }

  get token(): string {
    if (!this._token) {
      const token = this.jwtHelper.tokenGetter();
      if (token) {
        this._token = token;
      } else {
        this.eraseToken();
      }
    }
    return this._token;
  }

  get user(): User|null {
    const token = this.token;
    if (this.isValidToken(token) && (!this._user)) {
      this._user = this.extractUserInfoFromToken(token);
    }
    this.userSource.next(this._user);
    return this._user;
  }

  get userRoles(): UserRole[] {
    let roles = [];
    if (this._user) {
      roles = this.computeUserRoles(this._user);
    }
    return roles;
  }

  get userRolesIds(): string[] {
    const roles = this.userRoles;
    const rolesIds = [];
    for (const role of roles) {
      rolesIds.push(role.id);
    }
    return rolesIds;
  }

  get isInternalUser(): boolean {
    return this._internalUser;
  }

  public isAuthenticated(): boolean {
    return this.isValidToken(this.token);
  }

  checkRequiredRoles(required: string[], strict = false): boolean {
    const userRolesIds = this.userRolesIds;
    const intersection = required.filter((n) => (userRolesIds.indexOf(n) > -1));
    return strict ? intersection.length === required.length : intersection.length >= required.length;
  }

}
