import Grid from "../components/Grid.svelte";
import Page from "../components/Page.svelte";
import Teaser from "../components/Teaser.svelte";
import Card from "../components/Card.svelte";

import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";

/** @type {import('./$types').LayoutLoad} */

export async function load() {
    storyblokInit({
        accessToken: "YnLfsl5vqheiOUuUBbqAgAtt",
        use: [apiPlugin],
        components: {
            grid: Grid,
            page: Page,
            teaser: Teaser,
            card: Card,
            article: Article,
        },
        apiOptions: {
            region: "eu",
        },
    });

    let storyblokApi = await useStoryblokApi();

    return {
        storyblokApi: storyblokApi,
    };
}