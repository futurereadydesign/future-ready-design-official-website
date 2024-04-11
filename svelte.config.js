import adapter from "@sveltejs/adapter-auto";
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess(),
    kit: {
        adapter: adapter(),
        alias: {
            "@storyblok/svelte": "./node_modules/@storyblok/svelte",
        },
    },
};

export default config;
