import 'server-only';
import {Locale} from "@/i18n-config";


const resources = {
    'en-US': () => import('@/data/en-US.json').then((module) => module.default),
    'ru-RU': () => import('@/data/ru-RU.json').then((module) => module.default),
    'he-IL': () => import('@/data/he-IL.json').then((module) => module.default),
};

export const getLocalizedData = async (locale: Locale = 'en-US') => resources[locale]?.();