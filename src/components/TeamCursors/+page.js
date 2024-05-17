export async function load({ parent }) {
    const { storyblokApi } = await parent();
    const path = `cdn/stories/home`;
    const { data } = await storyblokApi.get(path, {
        version: 'draft'
    });

    const homeContent = data.story.content;

    // Extract common data as before
    const post = {
        name: homeContent.name ?? '',
        color: homeContent.color ?? '',
        gradient_color: homeContent.gradient_color ?? ''
    };

    // Extract svg items if available
    const svgItems = homeContent.svg_item ? homeContent.svg_item.map(svgItems => ({
        name: svgItems.name || '',
        color: svgItems.color ? svgItems.color.color : '',
        gradientColor: svgItems.gradient_color ? svgItems.gradient_color.color : ''
    })) : [];

    return {
        post,
        svgItems // Include slider items in the returned object
    };
}