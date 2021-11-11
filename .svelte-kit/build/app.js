import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-8125b900.js",
			css: [assets + "/_app/assets/start-d5b4de3e.css"],
			js: [assets + "/_app/start-8125b900.js",assets + "/_app/chunks/vendor-d80244fc.js",assets + "/_app/chunks/preload-helper-ec9aa979.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":"Resume.pdf","size":38427,"type":"application/pdf"},{"file":"favicon.png","size":1571,"type":"image/png"},{"file":"lottie-404-page.json","size":72736,"type":"application/json"}],
	layout: "src/routes/__layout.svelte",
	error: "src/routes/__error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/projects\/project1\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/projects/__layout.svelte", "src/routes/projects/project1.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
						b: ["src/routes/__error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),"src/routes/__error.svelte": () => import("../../src/routes/__error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/projects/__layout.svelte": () => import("../../src/routes/projects/__layout.svelte"),"src/routes/projects/project1.svelte": () => import("../../src/routes/projects/project1.svelte"),"src/routes/about.svelte": () => import("../../src/routes/about.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-d251b894.js","css":["assets/pages/__layout.svelte-c8db8dd2.css"],"js":["pages/__layout.svelte-d251b894.js","chunks/preload-helper-ec9aa979.js","chunks/vendor-d80244fc.js"],"styles":[]},"src/routes/__error.svelte":{"entry":"pages/__error.svelte-2f6d94e1.js","css":[],"js":["pages/__error.svelte-2f6d94e1.js","chunks/vendor-d80244fc.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-02cea124.js","css":[],"js":["pages/index.svelte-02cea124.js","chunks/vendor-d80244fc.js"],"styles":[]},"src/routes/projects/__layout.svelte":{"entry":"pages/projects/__layout.svelte-0dda6a3d.js","css":[],"js":["pages/projects/__layout.svelte-0dda6a3d.js","chunks/vendor-d80244fc.js"],"styles":[]},"src/routes/projects/project1.svelte":{"entry":"pages/projects/project1.svelte-b9fd1f42.js","css":[],"js":["pages/projects/project1.svelte-b9fd1f42.js","chunks/vendor-d80244fc.js"],"styles":[]},"src/routes/about.svelte":{"entry":"pages/about.svelte-94a2ea11.js","css":[],"js":["pages/about.svelte-94a2ea11.js","chunks/vendor-d80244fc.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}