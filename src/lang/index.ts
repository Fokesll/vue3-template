import english from './languages/en.ts';
import chinese from './languages/cn.ts';

import { createI18n } from 'vue-i18n';

const messages = {
    english,
    chinese,
}

const languages = (navigator.language || 'english').toLocaleLowerCase();

const i18n = createI18n({
    locale:localStorage.getItem('lang') || languages.split('-')[0] || 'english',
    fallbackLocale: 'english',
    silentTranslationWarn:true,
    messages

});

export default i18n;