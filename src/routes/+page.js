/** @type {import('./$types').PageLoad} */
export async function load({ parent, url }) {
    const { storyblokApi } = await parent();
    
    // Definieer de ondersteunde talen
    let languages = ['nl', 'en']; // Voeg hier de talen toe die je wilt gebruiken
    // First, check if a language is selected in the URL
    let language = url.searchParams.get('_storyblok_lang');
    // If not set or not supported, fallback to Dutch
    if (!language || !languages.includes(language)) {
        language = 'nl'; // Stel hier je standaardtaal in
    }

    // Haal de 'home' story op in de opgegeven taal
    const path = 'cdn/stories/home';
    const dataStory = await storyblokApi.get(path, {
        version: 'draft',
        language: language
    });
    
    return {
        story: dataStory.data.story,
        language: language
    };
}