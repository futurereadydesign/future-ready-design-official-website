// Importeer de Content types
import Page from "../components/Storyblok/Page.svelte";

// Importeer de Nestables
import Teaser from "../components/Storyblok/Teaser.svelte";
import AllBlogs from "../components/Storyblok/AllBlogs.svelte";

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
            teaser: Teaser, 
            'all-blogs': AllBlogs,
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
