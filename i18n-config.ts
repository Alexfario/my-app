export const i18n = {
    defaultLocale: ["en-US", 'English'],
    locales: [["en-US", 'English'], ["ru-RU", 'Русский'], ["he-IL", 'עִברִית']],
} as const;

export type Locale = (typeof i18n)["locales"][number][0];