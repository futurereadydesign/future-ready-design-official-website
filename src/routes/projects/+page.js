import { resolveLanguageFromUrl } from '$lib/language.js';

// De functie haalt de Story's op vanuit Storyblok en returnt deze
// om te worden gebruikt binnen Sveltekit

/** @type {import('./$types').PageLoad} */
export async function load({ parent, url }) {
    const { storyblokApi, language: defaultLanguage } = await parent();
    const language = resolveLanguageFromUrl(url, defaultLanguage);

    const path = 'cdn/stories/projects';
    const dataStory = await storyblokApi.get(path, {
        version: 'draft',
        language
    });

    return {
        story: dataStory.data.story,
        language
    };
}
