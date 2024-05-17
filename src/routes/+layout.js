// Importeer de Content types
import Page from "../components/Storyblok/Page.svelte";

// Importeer de Nestables
import Header from "../components/Storyblok/Header.svelte";
import AllBlogs from "../components/Storyblok/AllBlogs.svelte";
import AllProjects from "../components/Storyblok/AllProjects.svelte";

import BlogsCarousel from "../components/BlogsCarousel.svelte";
import ForAnyDevice from "../components/ForAnyDevice.svelte";
import TeamCursors from "../components/TeamCursors/TeamCursors.svelte";

// Importeer Storyblok plugins en functionaliteiten
import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";

/** @type {import('./$types').LayoutLoad} */
// Definieer een async functie genaamd 'load'
export async function load() {
    // Initialiseer Storyblok met de vereiste opties
    storyblokInit({
        // Specificeer de token voor Storyblok
        accessToken: "YnLfsl5vqheiOUuUBbqAgAtt",
        // Gebruik de API-plugin van Storyblok
        use: [apiPlugin],
        // Definieer de componenten die in Storyblok zijn gedefinieerd
        components: {
            page: Page, 
            header: Header, 
            'blogs-carousel' : BlogsCarousel,
            'team-cursors': TeamCursors,
            'for-any-device': ForAnyDevice,
            'all-blogs': AllBlogs,
            'all-projects': AllProjects,
        },
        // Opties voor de Storyblok API
        apiOptions: {
            region: "eu", // Geef de regio van de API aan (Europa)
        },
    });

    // Gebruik de Storyblok API en wacht op de initialisatie
    let storyblokApi = await useStoryblokApi();

    // Return het Storyblok API-object
    return {
        storyblokApi: storyblokApi,
    };
}