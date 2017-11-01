import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from '../../auth/services/auth.service';
import { IMenuItem, IChildItem, menuItems } from './navigation.config';


function filterSubMenuItems(subMenu: IChildItem[], authService: AuthService): IChildItem[] {
  const subItems: IChildItem[] = [];
  subMenu = subMenu !== undefined ? subMenu : [];
  for (const subItem of subMenu) {
    const requiredRoles = subItem.roles || [];
    if (authService.checkRequiredRoles(requiredRoles)) {
      subItems.push(subItem);
    }
  }
  return subItems;
}

function filterMenuItems(defaultMenu: IMenuItem[], authService: AuthService): IMenuItem[] {
  const filteredMenu: IMenuItem[] = [];
  for (const menuItem of defaultMenu) {
    const requiredRoles = menuItem.roles || [];
    if (authService.checkRequiredRoles(requiredRoles)) {
      const subItems: IChildItem[] = filterSubMenuItems(menuItem.sub, authService);
      menuItem.sub = subItems;
      filteredMenu.push(menuItem);
    }
  }
  return filteredMenu;
}


@Injectable()
export class NavigationService {

  defaultMenu: IMenuItem[] = menuItems;

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle = 'Frequently Accessed';

  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>([]);

  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  constructor(
    private authService: AuthService
  ) {
    authService.userData.subscribe(
      userData => {
        this.menuItems.next(
          filterMenuItems(this.defaultMenu, authService)
        );
      }
    );
  }

}
