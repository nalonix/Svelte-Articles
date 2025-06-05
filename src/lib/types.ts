export type Article = {
	banner: string;
	title: string;
	slug: string;
	description: string;
	date: string;
	tags: string[];
	published: boolean;
	order: number;
	author?: string;
	category?: string;
	readingTime?: string;
};

// Define types
export type MarkdownNode = {
	type: string;
	value?: string;
	children?: MarkdownNode[];
	depth?: number; // Specific to heading nodes
};

export type Heading = {
	text: string;
	level: number;
	slug: string;
};

export type FileData = {
	headings: Heading[];
	fm?: {
		headings: Heading[];
	};
};

export type File = {
	data: FileData;
};
