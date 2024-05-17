// Haal de Storyblok API op om toegang te krijgen tot de API methoden
// Haal de specifieke slug uit de parameters en haal de juiste blogpost op via een bepaalde pad
/** @type {import('./$types').PageLoad} */

export async function load({ parent, params }) {
    const { storyblokApi } = await parent();
    const slug = params.slug;
    const path = `cdn/stories/projects/${slug}`;
    const { data } = await storyblokApi.get(path, {
        version: 'draft'
    });

    const projectContent = data.story.content;

    // Extract common data as before
    const post = {
        title: projectContent.title || `${slug}`,
        content: projectContent.content || `${slug}`,
        intro: projectContent.intro ?? '',
        clientOrPartner: projectContent.client_or_partner ?? '',
        projectType: projectContent.project_type ?? '',
        projectOverview: projectContent.project_overview ?? '',
        subtitle: projectContent.subtitle ?? '',
        subtitleText: projectContent.subtitle_text ?? '',
        finalWordsTitle: projectContent.final_words_title ?? '',
        finalWordsText: projectContent.final_words_text ?? '',
        logo: projectContent.logo ? projectContent.logo.filename : null,
        image: projectContent.image ? projectContent.image.filename : null,
        imageAlt: projectContent.image ? projectContent.image.alt : '',
        date: projectContent.date ?? '',
        link: projectContent.link?.cached_url ?? '',
        metaDescription: projectContent.meta_description || '',
        metaImage: projectContent.meta_image || ''
    };

    // Extract slider items if available
    const sliderItems = projectContent.slider_item ? projectContent.slider_item.map(item => ({
        listImage: item.image.filename || '',
        listImageAlt: item.image.alt || '',
        listTitle: item.title || '',
        listText: item.text || ''
    })) : [];

    return {
        post,
        sliderItems // Include slider items in the returned object
    };
}



// export async function load({ parent, params }) {
//     const { storyblokApi } = await parent();
//     const slug = params.slug;
//     const path = `cdn/stories/projects/${slug}`;
//     const { data } = await storyblokApi.get(path, {
//         version: 'draft'
//     });
  
//     // Controleren of de benodigde velden aanwezig zijn in de content, zo niet...
//     // Geef dan een waarde van null of een lege string
//     const logo = data.story.content.logo ? data.story.content.logo.filename : null;
//     const image = data.story.content.image ? data.story.content.image.filename : null;
//     const imageAlt = data.story.content.image ? data.story.content.image.alt : '';
//     const intro = data.story.content.intro ?? '';
//     const clientOrPartner = data.story.content.client_or_partner ?? '';
//     const projectType = data.story.content.project_type ?? '';
//     const projectOverview = data.story.content.project_overview ?? '';
//     const subtitle = data.story.content.subtitle ?? '';
//     const subtitleText = data.story.content.subtitle_text ?? '';
//     const finalWordsTitle = data.story.content.final_words_title ?? '';
//     const finalWordsText = data.story.content.final_words_text ?? '';

//     const date = data.story.content.date ?? '';
//     const link = data.story.content.link?.cached_url ?? '';

//     // De meta data wat uit Storyblok wordt gehaald
//     const metaDescription = data.story.content.meta_description || '';
//     const metaImage = data.story.content.meta_image || '';

//     // De code returnt een object met alle waardes van de blogpost
//     return {
//         post: {
//             title: data.story.content.title || `${slug}`,
//             content: data.story.content.content || `${slug}`,
//             intro: intro,
//             clientOrPartner: clientOrPartner,
//             projectType: projectType,
//             projectOverview: projectOverview,
//             subtitle: subtitle,
//             subtitleText: subtitleText,
//             finalWordsTitle: finalWordsTitle,
//             finalWordsText: finalWordsText,
//             logo: logo,
//             image: image,
//             imageAlt: imageAlt,
//             date: date,
//             link: link,
//             // De meta data wat uit Storyblok wordt gehaald
//             metaDescription: metaDescription,
//             metaImage: metaImage
//         }
//     };
//   }