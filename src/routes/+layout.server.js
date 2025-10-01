import { redirect } from '@sveltejs/kit';
import { detectPreferredLanguage, SUPPORTED_LANGUAGES } from '$lib/language.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url, request }) {
  const urlLang = url.searchParams.get('_storyblok_lang');
  const language = detectPreferredLanguage({
    urlLang,
    acceptLanguageHeader: request.headers.get('accept-language')
  });

  const urlLangIsSupported = urlLang && SUPPORTED_LANGUAGES.includes(urlLang);

  if (!urlLangIsSupported) {
    if (language === 'nl' && !urlLang) {
      return { language };
    }

    const destination = new URL(url.href);
    destination.searchParams.set('_storyblok_lang', language);
    throw redirect(302, destination.pathname + destination.search);
  }

  return { language: urlLang };
}
