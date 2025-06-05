<script>
	import "../app.css";
	import Footer from "./_components/Footer.svelte";
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>




{@render children?.()}
<Footer />