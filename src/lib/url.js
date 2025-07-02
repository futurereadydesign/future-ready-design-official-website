// Utility to generate URLs with the correct language query parameter
export function withLang(path, language) {
  if (!path.startsWith('/')) path = '/' + path;
  return `${path}${path.includes('?') ? '&' : '?'}_storyblok_lang=${language}`;
} 