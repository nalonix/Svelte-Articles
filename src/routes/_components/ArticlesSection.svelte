<script lang="ts">
	import { run } from 'svelte/legacy';

	import { onMount } from 'svelte';
	import ArticleCard from './ArticleCard.svelte';
	import type { Article } from '$lib/types';

	interface Props {
		articles: Article[];
	}

	let { articles }: Props = $props();

	const FILTER_TAGS = [
		'ALL',
		'TRAVEL',
		'CULTURE',
		'NORTH AMERICA',
		'AFRICA',
		'DINING',
		'LANDMARKS'
	] as const;

	type FilterTag = typeof FILTER_TAGS[number];

	let filteredArticles: Article[] = $state([]);
	let selectedFilter: FilterTag = $state('ALL');

	// Initialize filtered articles on mount
	onMount(() => {
		// @ts-ignore
		filteredArticles = articles;

		// console.log(articles);
	});

	// filtering articles based on selected tag
	$effect(() => {
		filteredArticles =
			selectedFilter === 'ALL'
				? articles
				: articles.filter((article) => article.tags.includes(selectedFilter));
	});

</script>

<section class="max-w-7xl mx-auto min-h-screen select-none">
	<div class="flex flex-col items-center gap-2 py-5">
		<h1 class="text-4xl text-center">Articles</h1>
		<p class="font-light">Delve into our exploration of various destinations and cultures</p>
	</div>

	<div class="flex items-center justify-center flex-wrap gap-2 px-2">
		{#each FILTER_TAGS as tag (tag)}
			<button
				class={`tag ${selectedFilter === tag ? 'active' : ''}`}
				onclick={() => (selectedFilter = tag)}
			>
				{tag}
			</button>
		{/each}
	</div>

	<div
		class="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 pb-20 pt-8"
	>
		{#each filteredArticles as article (article.slug)}
			<ArticleCard {article} />
		{/each}
	</div>
</section>

<style>
	.tag.active {
		font-weight: bold;
		border-bottom: 2px solid black;
	}
</style>
