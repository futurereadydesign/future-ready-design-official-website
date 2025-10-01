import { resolveLanguageFromUrl } from '$lib/language.js';

/** @type {import('./$types').PageLoad} */
export async function load({ parent, url }) {
    const { storyblokApi, language: defaultLanguage } = await parent();
    const language = resolveLanguageFromUrl(url, defaultLanguage);

    const path = 'cdn/stories/accessibility';
    const dataStory = await storyblokApi.get(path, {
        version: 'draft',
        language
    });

    return {
        story: dataStory.data.story,
        language
    };
}
