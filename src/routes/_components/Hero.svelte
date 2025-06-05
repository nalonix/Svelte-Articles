<script lang="ts">
	import WatermarkBackground from './WatermarkBackground.svelte';

	import File from 'phosphor-svelte/lib/File';
</script>

<section class="flex flex-col gap-5 items-center justify-center p-7 h-[50%] min-h-[400px]">

	<WatermarkBackground />
	<div class="flex flex-col items-center">
		<h2 class="text-4xl">Welcome</h2>
		<h1 class="text-5xl sm:text-8xl font-bold text-center">Svelte Articles</h1>
	</div>
	<div>
		<p class="text-center max-w-2xl xl:max-w-3xl">
			This is the catch phrase of my blog.
		</p>
	</div>
	<div>
		<a href="/docs/resume.pdf" class="primary-button gap-1 uppercase text-sm">
			Catalogue <File size={18} />
		</a>
	</div>
</section>
