const SUPPORTED_LANGUAGES = ["nl", "en"];
const DEFAULT_NON_DUTCH_LANGUAGE = "en";

function normalizeCandidate(code) {
  return code?.split(";")[0].trim().toLowerCase() || "";
}

function matchFromHeader(header) {
  if (!header) return null;
  const candidates = header.split(",").map(normalizeCandidate).filter(Boolean);
  for (const candidate of candidates) {
    if (candidate.startsWith("nl")) return "nl";
    if (candidate.startsWith("en")) return "en";
  }
  return null;
}

export function detectPreferredLanguage({ urlLang, acceptLanguageHeader } = {}) {
  if (urlLang && SUPPORTED_LANGUAGES.includes(urlLang)) {
    return urlLang;
  }

  const headerMatch = matchFromHeader(acceptLanguageHeader);
  if (headerMatch) {
    return headerMatch;
  }

  return DEFAULT_NON_DUTCH_LANGUAGE;
}

export function resolveLanguageFromUrl(url, fallback = DEFAULT_NON_DUTCH_LANGUAGE) {
  const urlLang = url?.searchParams.get("_storyblok_lang");
  if (urlLang && SUPPORTED_LANGUAGES.includes(urlLang)) {
    return urlLang;
  }
  return fallback;
}

export { SUPPORTED_LANGUAGES };
