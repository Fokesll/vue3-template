import enUS from './languages/en.ts';
import zhCN from './languages/cn.ts';

import { createI18n } from 'vue-i18n';

const messages = {
    enUS,
    zhCN,
}

const languages = (navigator.language || 'enUS').toLocaleLowerCase();

const i18n = createI18n({
    locale:localStorage.getItem('lang') || languages.split('-')[0] || 'enUS',
    fallbackLocale: 'enUS',
    silentTranslationWarn:true,
    globalInjection:true,
    legacy:false,
    messages

});

export default i18n;