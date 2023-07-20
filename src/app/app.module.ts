import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent, SidenavComponent } from '@app/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats } from '@angular/material/core';
import { NotificationModule } from '@app/services';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './components/layout/layout.component';
import { SubLevelMenuComponent } from './components/sidenav/sub-level-menu.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { L10nIntlModule, L10nTranslationModule } from 'angular-l10n';
import { L10nCookieStorage } from '@app/core/l10n/cookie-storge.service';
import { getL10nConfig } from '@app/core/l10n/l10n-config.helper';

const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: {day: 'numeric', month: 'numeric', year: 'numeric'},
  },
  display: {
    dateInput: {day: 'numeric', month: 'short', year: 'numeric'},
    monthYearLabel: {year: 'numeric', month: 'short'},
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'long'}
  }
};

const StoreDevtools = !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    LayoutComponent,
    SubLevelMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NotificationModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot({}),
    StoreDevtools,
    LeafletModule,
    L10nTranslationModule.forRoot(getL10nConfig(['en'], false), {
      storage: L10nCookieStorage,
    }),
    L10nIntlModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
