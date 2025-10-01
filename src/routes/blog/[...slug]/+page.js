import { resolveLanguageFromUrl } from "$lib/language.js";

/** @type {import('./$types').PageLoad} */
export async function load({ parent, params, url }) {
    const { storyblokApi, language: defaultLanguage } = await parent();
    const language = resolveLanguageFromUrl(url, defaultLanguage);

    const slug = params.slug;
    const path = `cdn/stories/blog/${slug}`;
    const { data } = await storyblokApi.get(path, {
        version: "draft",
        language
    });

    const content = data.story.content;

    const logo = content.logo ? content.logo.filename : null;
    const image = content.image ? content.image.filename : null;
    const imageAlt = content.image ? content.image.alt : "";
    const date = content.date ?? "";
    const link = content.link?.cached_url ?? "";

    const authorName = content.author_name ?? "";
    const authorRole = content.author_role ?? "";
    const authorImage = content.author_picture ? content.author_picture.filename : null;
    const authorImageAlt = content.author_picture ? content.author_picture.alt : "";
    const authorCompany = content.author_company ?? "";
    const footerTitle = content.footer_title ?? "";
    const footerSubtitle = content.footer_subtitle ?? "";
    const footerLinkText = content.footer_link_text ?? "";

    const metaDescription = content.meta_description || "";
    const metaImage = content.meta_image || "";

    return {
        post: {
            title: content.title || `${slug}`,
            content: content.content || `${slug}`,
            logo,
            image,
            imageAlt,
            date,
            link,
            metaDescription,
            metaImage,
            authorName,
            authorRole,
            authorImage,
            authorImageAlt,
            authorCompany,
            footerTitle,
            footerSubtitle,
            footerLinkText
        },
        language
    };
}

