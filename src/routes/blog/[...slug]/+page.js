// GLOBAL STORYBLOK FUNCTIONS
import { renderRichText } from "@storyblok/js";

// Haal de Storyblok API op om toegang te krijgen tot de API methoden
// Haal de specifieke slug uit de parameters en haal de juiste blogpost op via een bepaalde pad
/** @type {import('./$types').PageLoad} */
export async function load({ parent, params }) {
        const { storyblokApi } = await parent();
        const slug = params.slug;
        const path = `cdn/stories/blog/${slug}`;
        const { data } = await storyblokApi.get(path, {
            version: 'draft'
    });
    
    // Controleren of de benodigde velden aanwezig zijn in de content, zo niet...
    // Geef dan een waarde van null of een lege string
    const logo = data.story.content.logo ? data.story.content.logo.filename : null;
    const image = data.story.content.image ? data.story.content.image.filename : null;
    const imageAlt = data.story.content.image ? data.story.content.image.alt : '';
    const date = data.story.content.date ?? '';
    const link = data.story.content.link?.cached_url ?? '';

    // De meta data wat uit Storyblok wordt gehaald
    const metaDescription = data.story.content.meta_description || '';
    const metaImage = data.story.content.meta_image || '';

    // De code returnt een object met alle waardes van de blogpost
    return {
        post: {
            title: data.story.content.title || `${slug}`,
            content: data.story.content.content || `${slug}`,
            logo: logo,
            image: image,
            imageAlt: imageAlt,
            date: date,
            link: link,
            // De meta data wat uit Storyblok wordt gehaald
            metaDescription: metaDescription,
            metaImage: metaImage

        }
    };
}