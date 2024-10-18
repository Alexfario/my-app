
import { enUS, he, ru } from 'date-fns/locale'

import {Locale} from "@/i18n-config";


const localeToDateFnsLocaleDict = {
    'en-US': enUS,
    'he-IL': he,
    'ru-RU': ru,
};

export const getDateFnsLocale = (locale: Locale = 'en-US') => {
    return localeToDateFnsLocaleDict[locale];
};
