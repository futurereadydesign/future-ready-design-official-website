// De functie haalt de Story's op vanuit Storyblok en returnt deze
// om te worden gebruikt binnen Sveltekit

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
    const { storyblokApi } = await parent();
    const path = 'cdn/stories/terms-and-conditions';
    const dataStory = await storyblokApi.get(path, {
        version: 'draft'
    });
    return {
        story: dataStory.data.story
    };
  }