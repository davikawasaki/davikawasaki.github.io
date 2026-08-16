import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Builds a path for the given locale: '/' + 'projects' under 'pt' -> '/pt/projects'. Default locale has no prefix. */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  if (lang === defaultLang) return `/${clean}`.replace(/\/$/, '') || '/';
  return `/${lang}/${clean}`.replace(/\/$/, '') || `/${lang}`;
}

/** Given the current pathname, returns the equivalent path in the other locale. */
export function getAlternateLocalePath(url: URL, targetLang: Lang): string {
  const lang = getLangFromUrl(url);
  let rest = url.pathname;
  if (lang !== defaultLang) rest = rest.replace(`/${lang}`, '');
  return localizePath(rest, targetLang);
}
