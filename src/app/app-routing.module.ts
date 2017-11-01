import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutCleanComponent } from './layout/layout-clean/layout-clean.component';
import { LayoutCompleteComponent } from './layout/layout-complete/layout-complete.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: LayoutCleanComponent,
    loadChildren: './auth-views/auth-views.module#AuthViewsModule',
    data: { title: 'AUTHENTICATION', breadcrumb: 'AUTHENTICATION' }
  },
  {
    path: 'errors',
    component: LayoutCleanComponent,
    loadChildren: './error-views/error-views.module#ErrorViewsModule',
    data: { title: 'ERRORS', breadcrumb: 'ERRORS' }
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
