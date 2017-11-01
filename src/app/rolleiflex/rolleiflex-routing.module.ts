import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupItemResolver } from './rolleiflex.resolver';
import { GroupListResolver } from './rolleiflex.resolver';
import { UserItemResolver } from './rolleiflex.resolver';
import { UserListResolver } from './rolleiflex.resolver';

import { AuthGuardService } from '../auth/services/auth-guard.service';
import { LayoutCompleteComponent } from '../layout/layout-complete/layout-complete.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupComponent } from './group/group.component';
import { GroupAddComponent } from './group/group-add.component';
import { GroupEditComponent } from './group/group-edit.component';
import { GroupsComponent } from './group/groups.component';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user/user-add.component';
import { UserEditComponent } from './user/user-edit.component';
import { UsersComponent } from './user/users.component';


export const RolleiflexRoutes: Routes = [
  {
    path: 'dashboard',
    component: LayoutCompleteComponent,
    canActivateChild: [ AuthGuardService ],
    data: { title: 'ROLLEIFLEX.DASHBOARD.TITLE', breadcrumb: 'ROLLEIFLEX.DASHBOARD.TITLE'},
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { title: 'ROLLEIFLEX.DASHBOARD.TITLE', breadcrumb: 'ROLLEIFLEX.DASHBOARD.TITLE'},
      }
    ]
  },
  {
    path: 'users',
    component: LayoutCompleteComponent,
    canActivateChild: [ AuthGuardService ],
    data: { title: 'ROLLEIFLEX.USERS.HEADER', breadcrumb: 'ROLLEIFLEX.USERS.HEADER'},
    children: [
      {
        path: 'created',
        component: UsersComponent,
        resolve: {list: UserListResolver},
        data: {
          title: 'ROLLEIFLEX.USERS.WORKFLOW.CREATED', breadcrumb: 'ROLLEIFLEX.USERS.WORKFLOW.CREATED', queryParams: {'state': 'created'}
        }
      },
      {
        path: 'active',
        component: UsersComponent,
        resolve: {list: UserListResolver},
        data: {
          title: 'ROLLEIFLEX.USERS.WORKFLOW.ACTIVE', breadcrumb: 'ROLLEIFLEX.USERS.WORKFLOW.ACTIVE', queryParams: {'state': 'active'}
        }
      },
      {
        path: 'inactive',
        component: UsersComponent,
        resolve: {list: UserListResolver},
        data: {
          title: 'ROLLEIFLEX.USERS.WORKFLOW.INACTIVE', breadcrumb: 'ROLLEIFLEX.USERS.WORKFLOW.INACTIVE', queryParams: {'state': 'inactive'}
        }
      },
      {
        path: 'all',
        component: UsersComponent,
        resolve: {list: UserListResolver},
        data: {
          title: 'ROLLEIFLEX.USERS.ALL', breadcrumb: 'ROLLEIFLEX.USERS.ALL'
        }
      },
      {
        path: 'add',
        component: UserAddComponent,
        resolve: {groups: GroupListResolver},
        data: {
          title: 'ROLLEIFLEX.USERS.ADD', breadcrumb: 'ROLLEIFLEX.USERS.ADD'
        }
      },
      {
        path: ':id',
        data: { title: 'ROLLEIFLEX.USERS.ITEM.HEADER', breadcrumb: 'ROLLEIFLEX.USERS.ITEM.HEADER'},
        resolve: {item: UserItemResolver},
        children: [
          {
            path: 'edit',
            component: UserEditComponent,
            resolve: {groups: GroupListResolver},
            data: { title: 'ROLLEIFLEX.USERS.ITEM.HEADER', breadcrumb: 'ROLLEIFLEX.USERS.ITEM.HEADER'},
          },
          {
            path: '',
            component: UserComponent,
            data: { title: 'ROLLEIFLEX.USERS.ITEM.HEADER', breadcrumb: 'ROLLEIFLEX.USERS.ITEM.HEADER'},
          }
        ]
      },
      {
        path: '',
        component: UsersComponent,
        data: { title: 'ROLLEIFLEX.USERS.HEADER', breadcrumb: 'ROLLEIFLEX.USERS.HEADER'},
        pathMatch: 'full',
        resolve: {
          list: UserListResolver
        }
      }
    ]
  },
  {
    path: 'groups',
    component: LayoutCompleteComponent,
    canActivateChild: [ AuthGuardService ],
    data: { title: 'ROLLEIFLEX.GROUPS.HEADER', breadcrumb: 'ROLLEIFLEX.GROUPS.HEADER'},
    children: [
      {
        path: 'all',
        component: GroupsComponent,
        resolve: {list: GroupListResolver},
        data: {
          title: 'ROLLEIFLEX.GROUPS.ALL', breadcrumb: 'ROLLEIFLEX.GROUPS.ALL'
        }
      },
      {
        path: 'add',
        component: GroupAddComponent,
        data: {
          title: 'ROLLEIFLEX.GROUPS.ADD', breadcrumb: 'ROLLEIFLEX.GROUPS.ADD'
        }
      },
      {
        path: ':id',
        data: { title: 'ROLLEIFLEX.GROUPS.ITEM.HEADER', breadcrumb: 'ROLLEIFLEX.GROUPS.ITEM.HEADER'},
        resolve: {
          item: GroupItemResolver
        },
        children: [
          {
            path: 'edit',
            component: GroupEditComponent,
            data: { title: 'ROLLEIFLEX.GROUPS.ITEM.HEADER', breadcrumb: 'ROLLEIFLEX.GROUPS.ITEM.HEADER'},
          },
          {
            path: '',
            component: GroupComponent,
            data: { title: 'ROLLEIFLEX.GROUPS.ITEM.HEADER', breadcrumb: 'ROLLEIFLEX.GROUPS.ITEM.HEADER'},
          }
        ]
      },
      {
        path: '',
        component: GroupsComponent,
        data: { title: 'ROLLEIFLEX.GROUPS.HEADER', breadcrumb: 'ROLLEIFLEX.GROUPS.HEADER'},
        pathMatch: 'full',
        resolve: {
          list: GroupListResolver
        }
      }
    ]
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(RolleiflexRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RolleiflexRoutingModule { }
