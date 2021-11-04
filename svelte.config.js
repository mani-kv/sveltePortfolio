/** @type {import('@sveltejs/kit').Config} */

import {markdown} from 'svelte-preprocess-markdown'

const config = {
	extensions: ['.svelte','.md'],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
	preprocess: markdown()
};

export default config;
