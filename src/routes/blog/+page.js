// De functie haalt de Story's op vanuit Storyblok en returnt deze
// om te worden gebruikt binnen Sveltekit

/** @type {import('./$types').PageLoad} */
export async function load({ parent, url }) {
  const { storyblokApi } = await parent();
  let languages = ['nl', 'en'];
  let language = url?.searchParams.get('_storyblok_lang');
  if (!language || !languages.includes(language)) {
      language = 'nl';
  }
  const path = 'cdn/stories/blog';
  const dataStory = await storyblokApi.get(path, {
      version: 'draft',
      language: language
  });
  return {
      story: dataStory.data.story,
      language
  };
}
