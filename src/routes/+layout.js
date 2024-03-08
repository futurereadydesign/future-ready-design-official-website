// Content types
import Page from "../components/Storyblok/Page.svelte";

// Nestables
import Grid from "../components/Storyblok/Grid.svelte";
import Teaser from "../components/Storyblok/Teaser.svelte";
import Card from "../components/Storyblok/Card.svelte";

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