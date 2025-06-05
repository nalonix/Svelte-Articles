<script lang="ts">
	import { onMount } from 'svelte';

	import BiggerPicture from 'bigger-picture';
	import 'bigger-picture/css';

	import Info from 'phosphor-svelte/lib/Info';

	interface Props {
		id: string;
		article: string;
		caption: string;
	}

	let { id, article, caption }: Props = $props();

	let images: any[] = [];
	let galleryImg: HTMLDivElement;

	onMount(async () => {
		images = [];



		try {
			const res = await fetch(`/api/gallery/${article}/${id}`);

			if (!res.ok) {
				throw new Error(`Failed to fetch images: ${res.status}`);
			}

			images = await res.json();
			images = images.map((path) => {
				return { alt: 'screenshot', title: 'img title', img: path };
			});

			// initialize BiggerPicture
			let bp = BiggerPicture({
				target: galleryImg
			});

			// 	// open inline gallery
			bp.open({
				items: images,
				inline: true,
				scale: 1,
				intro: 'fadeup',
				noClose: true
			});
		} catch (err) {
			console.error('Error loading gallery images:', err);
			// error = err.message;
		} finally {
			// loading = false;
		}
	});
</script>

<div class="mt-4 mb-2">
	<div id="inline" bind:this={galleryImg} class="inline-gallery"></div>
	{#if caption}
		<div class="flex flex-row items-center justify-center gap-2 my-1">
			<Info size={16} />
			<p class="text-xs opacity-90">{caption}</p>
		</div>
	{/if}
</div>

<style>
	.inline-gallery {
		position: relative;
		background: #222;
		overflow: hidden;
	}
	.inline-gallery:before {
		content: '';
		padding-bottom: 66.66%;
		display: block;
	}
</style>
