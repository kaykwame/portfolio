<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import "../app.css";

	const tabs: string[] = ["Skills", "Projects", "Experience", "Education", "Resume"]
	
</script>

<div class="app">
	<Header {tabs}/>
	<main class=" overflow-x-hidden">
		<div class="w-screen min-h-[79vh]">
		<div class=" mx-40">

			<slot />
		</div>

		</div>
	</main>
</div>


