import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdIconModule,
  MdButtonModule,
  MdMenuModule,
  MdChipsModule,
  MdExpansionModule,
  MdCardModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// Translate
import { TranslateModule } from '@ngx-translate/core';

// Avatar
import { AvatarModule } from 'ng2-avatar';

// Auth
import { AuthModule } from '../auth/auth.module';

// Layout
import { LayoutModule } from '../layout/layout.module';

// Form
import { FormModule } from '../form/form.module';

// AuthRouter
import { RolleiflexRoutingModule } from './rolleiflex-routing.module';

// Services
import { GroupService } from './services/group.service';
import { UserService } from './services/user.service';

// Resolvers
import { GroupItemResolver } from './rolleiflex.resolver';
import { GroupListResolver } from './rolleiflex.resolver';
import { UserItemResolver } from './rolleiflex.resolver';
import { UserListResolver } from './rolleiflex.resolver';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupComponent } from './group/group.component';
import { GroupAddComponent } from './group/group-add.component';
import { GroupEditComponent } from './group/group-edit.component';
import { GroupsComponent } from './group/groups.component';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user/user-add.component';
import { UserEditComponent } from './user/user-edit.component';
import { UsersComponent } from './user/users.component';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdCardModule,
    MdButtonModule,
    MdMenuModule,
    MdChipsModule,
    MdExpansionModule,
    FlexLayoutModule,
    TranslateModule,
    AuthModule,
    FormModule,
    LayoutModule,
    AvatarModule,
    RolleiflexRoutingModule
  ],
  declarations: [
    DashboardComponent,
    GroupsComponent,
    GroupComponent,
    GroupEditComponent,
    GroupAddComponent,
    UsersComponent,
    UserComponent,
    UserEditComponent,
    UserAddComponent
  ],
  providers: [
    UserService,
    UserItemResolver,
    UserListResolver,
    GroupService,
    GroupItemResolver,
    GroupListResolver,
  ]
})
export class RolleiflexModule { }
