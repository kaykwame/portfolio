<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CloseSVG from '$lib/components/SVGs/CloseSVG.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import { showProj } from '$lib/stores/showProjStore';
	import { onMount } from 'svelte';

	onMount(() => {
		showProj.set(false);
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home page" />
</svelte:head>

<section class="space-y-12 mb-12">
	{#if !$showProj}
		<Hero />
		<hr />
		<Projects
			on:slideProject={() => {
				showProj.set(true);
			}}
		/>
	{/if}

	{#if $showProj}
		<button
			on:click={() => {
				showProj.set(false);
			}}
		>
			<CloseSVG />
		</button>
	{/if}
</section>
