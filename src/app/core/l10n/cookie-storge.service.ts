import { Inject, Injectable } from '@angular/core';
import { L10N_CONFIG, L10nConfig, L10nLocale, L10nStorage } from 'angular-l10n';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class L10nCookieStorage implements L10nStorage {

  constructor(@Inject(L10N_CONFIG) private l10nConfig: L10nConfig,
              private cookieService: CookieService) {
  }

  public async read(): Promise<L10nLocale | null> {
    const _schema = this.l10nConfig.schema;
    if (!_schema || _schema.length == 0) {
      return Promise.resolve(null);
    }

    return Promise.resolve(_schema[0].locale);
  }

  public async write(locale: L10nLocale): Promise<void> {
    if (locale && locale.language) {
      this.cookieService.set(
        'lang',
        locale.language,
        30,
        '/',
        document.location.hostname,
        true,
        'Strict'
      );
    }
  }

}
