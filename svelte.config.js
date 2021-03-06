/** @type {import('@sveltejs/kit').Config} */

import {markdown} from 'svelte-preprocess-markdown'
import adapter from '@sveltejs/adapter-netlify';
// import node from '@sveltejs/adapter-node';


const config = {
	extensions: ['.svelte','.md'],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter()
		// adapter: node()
	},
	preprocess: markdown()
};

export default config;
