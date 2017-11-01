import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { ErrorRoutingModule } from './error-routing.module';

// Views
import { NotFoundComponent } from './not-found/not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { DefaultErrorComponent } from './default-error/default-error.component';

@NgModule({
  imports: [
    CommonModule,
    ErrorRoutingModule
  ],
  declarations: [
    NotFoundComponent,
    ForbiddenComponent,
    ServerErrorComponent,
    DefaultErrorComponent
  ]
})
export class ErrorViewsModule { }
