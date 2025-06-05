<script lang="ts">
	export let name: string;
	export let href: string;
</script>

<a target="_blank" {href} class="link_underline">{name}</a>

<style lang="postcss">
	.link_underline {
		@apply text-blue-500 hover:text-blue-700 hover:underline;
	}
</style>
