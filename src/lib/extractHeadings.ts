import type { MarkdownNode, File } from './types';
import { visit } from 'unist-util-visit';

// Function to extract text from a Markdown node
function extractText(node: MarkdownNode): string {
	if (node.type === 'text') {
		return node.value || ''; // Handle undefined value
	} else if (node.children) {
		return node.children.map(extractText).join(''); // Recursively extract text
	}
	return '';
}

// Function to extract headings from a Markdown AST
export default function extractHeadings() {
	return (tree: MarkdownNode, file: File) => {
		file.data.headings = [];

		visit(tree, 'heading', (node: MarkdownNode) => {
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
