// import { sveltekit } from "@sveltejs/kit/vite";
// import { defineConfig } from "vite";
// import basicSsl from "@vitejs/plugin-basic-ssl";

// export default defineConfig({
//     plugins: [sveltekit(), basicSsl()],
//     server: {
//         https: true,
//     },
// });

import { sveltekit } from '@sveltejs/kit/vite';
import basicSsl from '@vitejs/plugin-basic-ssl'
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        proxy: {}
    },
    plugins: [basicSsl(), sveltekit()]
});