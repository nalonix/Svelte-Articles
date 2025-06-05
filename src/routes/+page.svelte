<script lang="ts">
	import { onMount } from 'svelte';
	//
	import * as config from '$lib/config';
	import { loglib } from '@loglib/tracker';
	//
	import Hero from './_components/Hero.svelte';
	import Footer from './_components/Footer.svelte';
	import ArticlesSection from './_components/ArticlesSection.svelte';

	interface Props {
		data: any;
	}

	onMount(() => {
		// Loglib analytics
		loglib.record({
			id: 'loglib id'
		});
	});

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<Hero />
	<ArticlesSection articles={data.articles} />
</section>
