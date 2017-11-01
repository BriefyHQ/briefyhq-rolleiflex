import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidRolesDirective } from './directives/valid-roles.directive';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ValidRolesDirective],
  declarations: [ValidRolesDirective],
  providers: [
    AuthGuardService,
    AuthService,
    UserService
  ]
})
export class AuthModule { }
