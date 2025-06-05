import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export interface Heading {
	text: string;
	level: number;
	slug: string;
	children: Heading[];
}

export interface HeadingInput {
	text: string;
	level: number;
	slug?: string;
}

export function createSlug(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^\w\s-]/g, '') // Remove all punctuation
		.replace(/\s+/g, '-') // Replace spaces with hyphens
		.replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
		.trim();
}

export function buildHeadingHierarchy(headings: HeadingInput[]): Heading[] {
	const root = { children: [] as Heading[] };
	const stack = [{ node: root, level: 1 }];

	for (const heading of headings) {
		while (stack.length && heading.level <= stack[stack.length - 1].level) {
			stack.pop(); // Move up to the correct parent level
		}

		const parent = stack[stack.length - 1].node;
		const newNode: Heading = {
			...heading,
			slug: heading.slug || createSlug(heading.text),
			children: []
		};
		parent.children.push(newNode);
		stack.push({ node: newNode, level: heading.level });
	}

	return root.children;
}
