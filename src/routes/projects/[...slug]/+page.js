import { resolveLanguageFromUrl } from "$lib/language.js";

/** @type {import('./$types').PageLoad} */
export async function load({ parent, params, url }) {
    const { storyblokApi, language: defaultLanguage } = await parent();
    const language = resolveLanguageFromUrl(url, defaultLanguage);

    const slug = params.slug;
    const path = `cdn/stories/projects/${slug}`;
    const { data } = await storyblokApi.get(path, {
        version: "draft",
        language
    });

    const content = data.story.content;

    const post = {
        title: content.title || `${slug}`,
        content: content.content || `${slug}`,
        intro: content.intro ?? "",
        clientOrPartner: content.client_or_partner ?? "",
        projectType: content.project_type ?? "",
        projectOverview: content.project_overview ?? "",
        clientOrPartnerLabel: content.client_or_partner_label ?? "",
        projectTypeLabel: content.project_type_label ?? "",
        projectOverviewLabel: content.project_overview_label ?? "",
        subtitle: content.subtitle ?? "",
        subtitleText: content.subtitle_text ?? "",
        finalWordsTitle: content.final_words_title ?? "",
        finalWordsText: content.final_words_text ?? "",
        logo: content.logo ? content.logo.filename : null,
        image: content.image ? content.image.filename : null,
        imageAlt: content.image ? content.image.alt : "",
        date: content.date ?? "",
        link: content.link?.cached_url ?? "",
        metaDescription: content.meta_description || "",
        metaImage: content.meta_image || "",
        getInTouchTitle: content.get_in_touch_title ?? "",
        getInTouchSpan: content.get_in_touch_span ?? ""
    };

    const sliderItems = content.slider_item
        ? content.slider_item.map((item) => ({
            listImage: item.image.filename || "",
            listImageAlt: item.image.alt || "",
            listTitle: item.title || "",
            listText: item.text || ""
        }))
        : [];

    return {
        post,
        sliderItems,
        language
    };
}

