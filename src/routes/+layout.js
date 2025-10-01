// Importeer de Content types
import Page from "../components/Storyblok/Page.svelte";

// Importeer de Nestables
import Header from "../components/Storyblok/Header.svelte";
import AllBlogs from "../components/Storyblok/AllBlogs.svelte";
import AllProjects from "../components/Storyblok/AllProjects.svelte";

import BlogsCarousel from "../components/BlogsCarousel.svelte";
import ForAnyDevice from "../components/ForAnyDevice.svelte";
import TeamCursors from "../components/TeamCursors/TeamCursors.svelte";
import Hero from "../components/Hero.svelte";
import OurStory from "../components/OurStory.svelte";
import Projects from "../components/Projects.svelte";
import HyperdriveCTA from "../components/HyperdriveCTA.svelte";
import Grid from "../components/Grid.svelte";
import FeaturedV1 from "../components/FeaturedV1.svelte";
import FeaturedV2 from "../components/FeaturedV2.svelte";

import HeroText from "../components/HeroText.svelte";
import ContentText from "../components/ContentText.svelte";
import ContentSphere from "../components/ContentSphere.svelte";
import Partners from "../components/Partners.svelte";
import Legal from "../components/Legal.svelte";

import ContactCTA from "../components/ContactCTA.svelte";

import Accessibility from "../components/Accessibility.svelte";
import Scan from "../components/Scan.svelte";

// Importeer Storyblok plugins en functionaliteiten
import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";
import { resolveLanguageFromUrl } from '$lib/language.js';

let storyblokIsInitialised = false;

function ensureStoryblokInit() {
    if (storyblokIsInitialised) return;

    storyblokInit({
        accessToken: "YnLfsl5vqheiOUuUBbqAgAtt",
        use: [apiPlugin],
        components: {
            page: Page,
            header: Header,
            'blogs-carousel': BlogsCarousel,
            'team-cursors': TeamCursors,
            'for-any-device': ForAnyDevice,
            'all-blogs': AllBlogs,
            'all-projects': AllProjects,
            Hero: Hero,
            'our-story': OurStory,
            'featured-projects': Projects,
            'hyperdrive-cta': HyperdriveCTA,
            'organisations-grid': Grid,
            'featured-v1': FeaturedV1,
            'featured-v2': FeaturedV2,
            'hero-text': HeroText,
            'content-text': ContentText,
            'content-sphere': ContentSphere,
            partners: Partners,
            ContactCTA: ContactCTA,
            legal: Legal,
            accessibility: Accessibility,
            scan: Scan,
        },
        apiOptions: {
            region: "eu",
        },
    });

    storyblokIsInitialised = true;
}

/** @type {import('./$types').LayoutLoad} */
export async function load({ data, url }) {
    ensureStoryblokInit();

    const storyblokApi = await useStoryblokApi();
    const language = resolveLanguageFromUrl(url, data?.language);

    const dataConfig = await storyblokApi.get('cdn/stories/navigation/config/', {
        version: 'draft',
        resolve_links: 'url',
        language
    });

    return {
        storyblokApi,
        nav: dataConfig.data.story.content.nav_menu,
        language
    };
}
