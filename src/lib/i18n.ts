import hu from "../i18n/hu.json";
import en from "../i18n/en.json";

export type Lang = "hu" | "en";

export const defaultLang: Lang = "en";

export const languages: Record<Lang, string> = {
  en: "English",
  hu: "Magyar",
};

export type TranslationKey = keyof typeof en;

export const translations: Record<Lang, Record<string, string>> = {
  hu,
  en,
};

export function t(lang: Lang, key: string): string {
  return translations[lang][key] ?? translations[defaultLang][key] ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, langOrSlug] = url.pathname.split('/');
  if (langOrSlug === 'hu' || langOrSlug === 'en') {
    return langOrSlug as Lang;
  }
  return defaultLang;
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const slugMap: Record<Lang, Record<string, string>> = {
    en: {
      'munkaim': 'work',
      'rolam': 'about',
    },
    hu: {
      'work': 'munkaim',
      'about': 'rolam',
    },
  };

  let localizedPath = path;
  const map = slugMap[lang];

  for (const [from, to] of Object.entries(map)) {
    localizedPath = localizedPath.replace(`/${from}`, `/${to}`);
  }

  return `/${lang}${localizedPath}`;
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'hu' ? 'hu-HU' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
