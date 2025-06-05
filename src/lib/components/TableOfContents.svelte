<script lang="ts">
	import { createSlug } from '$lib/utils';

	export let headings = [];

	// Function to build a nested structure
	function buildHierarchy(headings) {
		const root = { children: [] };
		const stack = [{ node: root, level: 1 }];

		for (const heading of headings) {
			while (stack.length && heading.level <= stack[stack.length - 1].level) {
				stack.pop(); // Move up to the correct parent level
			}

			const parent = stack[stack.length - 1].node;
			const newNode = { 
				...heading, 
				slug: createSlug(heading.text),
				children: [] 
			};
			parent.children.push(newNode);
			stack.push({ node: newNode, level: heading.level });
		}

		return root.children;
	}

	$: nestedHeadings = buildHierarchy(headings);
</script>

<ul class="list-none pl-2 text-zinc-600">
	{#each nestedHeadings as heading}
		<li class="mx-1">
			<a href={`#${heading.slug}`} class="hover:underline">{heading.text}</a>
			{#if heading.children.length}
				<ul>
					<svelte:self headings={heading.children} />
				</ul>
			{/if}
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
	}
	li {
		margin: 0.25rem 0;
	}
	a {
		display: inline-block;
		transition: color 0.2s ease;
	}
	a:hover {
		color: #000;
	}
</style>
