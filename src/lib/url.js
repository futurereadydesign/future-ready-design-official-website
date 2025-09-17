// Normalize a Storyblok URL/path to app routes (strip language folders like /en or /nl)
export function normalizePath(path) {
  if (!path) return '/';
  if (!path.startsWith('/')) path = '/' + path;
  // Remove a leading language segment (e.g., /en or /nl)
  path = path.replace(/^\/(en|nl)(?=\/|$)/, '');
  if (path === '') path = '/';
  return path;
}

// Utility to generate URLs with the correct language query parameter
export function withLang(path, language) {
  const normalized = normalizePath(path);
  return `${normalized}${normalized.includes('?') ? '&' : '?'}_storyblok_lang=${language}`;
}
