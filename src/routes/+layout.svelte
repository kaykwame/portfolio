<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	const tabs: string[] = ['Skills', 'Experience', 'Education', 'Resume'];
</script>

<div class="app">
	<Header {tabs} />
	<main class=" overflow-x-hidden h-full overflow-hidden">
		<div class="w-screen">
			<div class="desktop:mx-40 laptop:mx-40 table:mx-20 mx-5">
				<slot />
			</div>
		</div>
	</main>
</div>
