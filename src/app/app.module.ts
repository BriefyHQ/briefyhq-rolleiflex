import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Translation
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Angular2 Maps
import { AgmCoreModule } from '@agm/core';

// Avatar support
import { AvatarModule } from 'ng2-avatar';

// JWT Support
import { JwtModule } from '@auth0/angular-jwt';

// Layout Module
import { LayoutModule } from './layout/layout.module';
import { RolleiflexModule } from './rolleiflex/rolleiflex.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function tokenGetter(): string {
  return localStorage.getItem(environment.auth.jwt.storageKey);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
      }
    ),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        throwNoTokenError: false,
        skipWhenExpired: true,
        headerName: 'Authorization',
        authScheme: 'JWT ',
        whitelistedDomains: ['localhost:8000', 'api.stg.briefy.co', 'api.briefy.co']
      }
    }),
    AgmCoreModule.forRoot({ apiKey: environment.maps }),
    AvatarModule.forRoot(),
    LayoutModule,
    RolleiflexModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
