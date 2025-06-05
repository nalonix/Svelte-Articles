<script lang="ts">
	export let tags: string[];
</script>

<div class="flex flex-wrap gap-2">
	{#each tags as tag}
		<span class="tag">{tag}</span>
	{/each}
</div>
