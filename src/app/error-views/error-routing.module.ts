import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultErrorComponent } from './default-error/default-error.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';


export const ErrorRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404.html',
        component: NotFoundComponent,
        data: { title: 'Not Found' }
      },
      {
        path: '403.html',
        component: ForbiddenComponent,
        data: { title: 'Access Denied'}
      },
      {
        path: '50x.html',
        component: ServerErrorComponent,
        data: { title: 'Server Error' }
      },
      {
        path: 'error.html',
        component: DefaultErrorComponent,
        data: { title: 'Error' }
      },
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(ErrorRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ErrorRoutingModule { }
