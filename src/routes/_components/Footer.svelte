<script lang="ts">
	import { SOCIALS } from '$lib/constants';
</script>

<section class="flex flex-col justify-end bg-gradient-to-b from-stone-200/10 to-stone-100/90 h-48">
	<div class="flex items-center justify-center gap-2 px-2 py-2">
		{#each SOCIALS as social}
			<a
				href={social.href}
				target="_blank"
				class="bg-zinc-900 border border-zinc-900 transition-all duration-200 rounded-full p-1.5 gap-1 uppercase text-sm hover:invert hover:border-zinc-300"
			>
				<social.icon size={24} weight="light" color="white" />
			</a>
		{/each}
	</div>
	<div class="max-w-7xl mx-auto p-4">
		<p class="font-semibold text-sm text-center">svelte-articles</p>
	</div>
</section>
