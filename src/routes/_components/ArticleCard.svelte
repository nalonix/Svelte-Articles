<script lang="ts">
	// Please fix type issue
	import type { Article } from '$lib/types';
	// import { Heart } from 'phosphor-svelte';

	import { fade } from 'svelte/transition';

	interface Props {
		article: Article;
	}

	let { article }: Props = $props();

	// function handleLike() {
	// 	console.log('Like Article', article?.slug);
	// }
</script>

<div class="relative card" transition:fade={{ duration: 200 }}>
	<!-- <button
		onclick={handleLike}
		class="flex w-fit p-1 absolute right-3 top-3 rounded-full bg-black/90 backdrop-blur-sm invert z-30"
	>
		<Heart size={18} color="white" />
	</button> -->
	<a href={`/articles/${article.slug}`}>
		<div class="relative">
			<div class="w-full h-full">
				<img src={article.banner} alt="" class="rounded-t-3xl" />
			</div>
			<span class="block absolute bottom-2 left-4 px-2 rounded-full text-xs bg-white"
				>{article.date}</span
			>
		</div>
		<div class="px-3.5 py-2">
			<h3 class="font-bold capitalize my-1">{article.title}</h3>
			<p>{article.description}</p>
			<div class="my-2 flex flex-wrap gap-2">
				{#each article.tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		</div>
	</a>
</div>
