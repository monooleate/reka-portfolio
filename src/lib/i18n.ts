import hu from "../i18n/hu.json";
import en from "../i18n/en.json";

export type Lang = "hu" | "en";

export const translations: Record<Lang, Record<string, string>> = {
  hu,
  en,
};

export function t(lang: Lang, key: string): string {
  return translations[lang][key] ?? key;
}
