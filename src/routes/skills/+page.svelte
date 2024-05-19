<script lang="ts">
	//
	import skills from '$lib/jsondata/skills.json';
	import Progressbar from '$lib/components/Progressbar.svelte';
</script>

<div class="grid mt-10 phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2">
	{#each skills as skill}
		<div class="col-span-1 mx-2">
			<Progressbar skill={skill.name} level={skill.level} />
		</div>
	{/each}
</div>
