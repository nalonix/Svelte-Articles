import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from "mdsvex";
import rehypeSlug from 'rehype-slug';


import { visit } from 'unist-util-visit';

// Function to extract text from a Markdown node
function extractText(node) {
	if (node.type === 'text') {
		return node.value || ''; // Handle undefined value
	} else if (node.children) {
		return node.children.map(extractText).join(''); // Recursively extract text
	}
	return '';
}

// Function to extract headings from a Markdown AST
function extractHeadings() {
	return (tree, file) => {
		file.data.headings = [];

		visit(tree, 'heading', (node) => {
			const text = extractText(node).trim(); // Extract full heading text
			const slug = text.toLowerCase().replace(/\s+/g, '-');

			file.data.headings.push({
				text,
				level: node.depth || 1, // Default to level 1 if depth is undefined
				slug
			});
		});

		// Add headings to the frontmatter (fm) object
		if (!file.data.fm) {
			file.data.fm = { headings: [] };
		}
		file.data.fm.headings = file.data.headings;
	};
}



/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	rehypePlugins: [rehypeSlug],
    remarkPlugins: [ extractHeadings ]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".md"],
	preprocess: [ vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
};

export default config;
