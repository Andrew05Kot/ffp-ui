import { Inject, Injectable } from '@angular/core';
import { L10nConfig, L10nTranslationService, L10N_CONFIG } from 'angular-l10n';

@Injectable({
  providedIn: 'root'
})
export class L10nHelperService {

  constructor(private translationService: L10nTranslationService,
              @Inject(L10N_CONFIG) private l10nConfig: L10nConfig) {
  }

  registerL10nProvider(providerName: string, translations: Record<string, any> = {}) {

    let availableTranslations: Record<string, any> = {};
    this.translationService.getAvailableLanguages().forEach(l => {
      availableTranslations[l] = translations[l] || {};
    });

    this.translationService.addProviders([{name: providerName, asset: availableTranslations}]);
    this.translationService.loadTranslation([{name: providerName, asset: availableTranslations}]);
  }

  setLocalByLangCode(langCode: string) {
    if (langCode && this.translationService.getAvailableLanguages().includes(langCode)) {
      const targetSchema = this.l10nConfig.schema.find(x => x.locale.language == langCode);
      if (targetSchema) {
        this.translationService.setLocale(targetSchema.locale);
      }
    }
  }
}
