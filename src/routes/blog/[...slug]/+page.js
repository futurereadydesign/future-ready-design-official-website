// Haal de Storyblok API op om toegang te krijgen tot de API methoden
// Haal de specifieke slug uit de parameters en haal de juiste blogpost op via een bepaalde pad
/** @type {import('./$types').PageLoad} */
export async function load({ parent, params, url }) {
        const { storyblokApi } = await parent();
    let languages = ['nl', 'en'];
    let language = url?.searchParams.get('_storyblok_lang');
    if (!language || !languages.includes(language)) {
        language = 'nl';
    }
        const slug = params.slug;
        const path = `cdn/stories/blog/${slug}`;
        const { data } = await storyblokApi.get(path, {
        version: 'draft',
        language: language
    });

    // Controleren of de benodigde velden aanwezig zijn in de content, zo niet...
    // Geef dan een waarde van null of een lege string
    const logo = data.story.content.logo ? data.story.content.logo.filename : null;
    const image = data.story.content.image ? data.story.content.image.filename : null;
    const imageAlt = data.story.content.image ? data.story.content.image.alt : '';
    const date = data.story.content.date ?? '';
    const link = data.story.content.link?.cached_url ?? '';

    const authorName = data.story.content.author_name ?? '';
    const authorRole = data.story.content.author_role ?? '';
    const authorImage = data.story.content.author_picture ? data.story.content.author_picture.filename : null;
    const authorImageAlt = data.story.content.author_picture ? data.story.content.author_picture.alt : '';
    const authorCompany = data.story.content.author_company ?? '';
    const footerTitle = data.story.content.footer_title ?? '';
    const footerSubtitle = data.story.content.footer_subtitle ?? '';
    const footerLinkText = data.story.content.footer_link_text ?? '';

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

        
            metaImage: metaImage,

            authorName: authorName,
            authorRole: authorRole,
            authorImage: authorImage,
            authorImageAlt: authorImageAlt,
            authorCompany: authorCompany,
            footerTitle: footerTitle,
            footerSubtitle: footerSubtitle,
            footerLinkText: footerLinkText,
        }, language    
        


    };
}