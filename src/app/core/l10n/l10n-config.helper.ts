import { L10nConfig } from 'angular-l10n';

const LANGUAGE_NAMES = [
    { code : 'en', name : 'English'},
    { code : 'xx', name : 'L10n keys'}
];

export function getL10nConfig(languages : string[] = [], l10nDebugMode : boolean = false) : L10nConfig {
    if(!languages || languages.length==0){
        languages = ['en'];
    }

    if(l10nDebugMode && !languages.includes('xx')){
        languages.push('xx')
    }

    return {
        format: 'language',
        providers: [],
        cache: true,
        fallback: true,
        keySeparator: '.',
        defaultLocale: { language: languages[0], currency:'EUR' },
        schema : languages.map(l=>  {
            return {
                locale : {language: l, currency:'EUR'},
                text : (LANGUAGE_NAMES.find(x=>x.code == l) || {code : l, name : l}).name
            };
        })
    };
}
