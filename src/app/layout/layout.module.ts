import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import {
  MdSidenavModule,
  MdListModule,
  MdTooltipModule,
  MdOptionModule,
  MdSelectModule,
  MdMenuModule,
  MdSnackBarModule,
  MdGridListModule,
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdRadioModule,
  MdCheckboxModule,
  MdCardModule
} from '@angular/material';

import { AvatarModule } from 'ng2-avatar';

import { AuthModule } from '../auth/auth.module';
import { FormModule } from '../form/form.module';

// Services
import { NavigationService } from './services/navigation.service';
import { RoutePartsService } from './services/route-parts.service';

// Directives
import { AppAccordionDirective } from './directives/app-accordion.directive';
import { EqualValidatorDirective } from './directives/equal-validator.directive';
import { FontSizeDirective } from './directives/font-size.directive';
import { SideNavAccordionDirective } from './directives/sidenav-accordion.directive';

// Components
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LayoutCompleteComponent } from './layout-complete/layout-complete.component';
import { LayoutCleanComponent } from './layout-clean/layout-clean.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdIconModule,
    MdListModule,
    MdTooltipModule,
    MdOptionModule,
    MdSelectModule,
    MdMenuModule,
    MdSnackBarModule,
    MdGridListModule,
    MdToolbarModule,
    MdButtonModule,
    MdRadioModule,
    MdCheckboxModule,
    MdCardModule,
    FormModule,
    AvatarModule,
    TranslateModule,
    AuthModule
  ],
  exports: [
    EqualValidatorDirective,
    SideNavAccordionDirective,
    AppAccordionDirective,
    FontSizeDirective,
    BreadcrumbComponent,
    NavigationComponent,
    TopbarComponent,
    LayoutCompleteComponent,
    LayoutCleanComponent
  ],
  declarations: [
    EqualValidatorDirective,
    SideNavAccordionDirective,
    AppAccordionDirective,
    FontSizeDirective,
    BreadcrumbComponent,
    NavigationComponent,
    TopbarComponent,
    LayoutCompleteComponent,
    LayoutCleanComponent
  ],
  providers: [
    NavigationService,
    RoutePartsService,
  ]
})
export class LayoutModule { }
