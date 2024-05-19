<script lang="ts">
	// import { slide } from 'svelte/transition';
</script>

<div class="flex justify-center">
	<div
		class="mt-10 grid laptop:grid-cols-3 tablet:grid-cols-3 phone:grid-cols-1 space-y-3 laptop:space-y-0 tablet:space-y-0"
	>
		<div
			class="laptop:col-span-2 tablet:col-span-2 phone:grid-cols-1 flex justify-center items-center"
		>
			<div>
				<h1 class="font-bold phone:text-6xl text-5xl mb-10 text-center">WEB DEVELOPER</h1>
				<p class="desktop:text-base text-sm max-w-full font-mono text-gray-600">
					Hi there &#128075, Kwame here. <br /> I am a graduate Electrical Engineer turned Web Developer.
					I am currently helping drive digital innovation through building web-based software for workflow
					automation in the smart building consulting industry. Let's connect and share ideas. Cheers!
					&#128521
				</p>
			</div>
		</div>
		<div class="laptop:col-span-1 tablet:col-span-1 phone:grid-cols-1">
			<div class="w-full flex justify-center">
				<img
					class="max-w-[80%] duration-100 ease-in-out cursor-pointer hover:scale-105 transition"
					src="hompagepx.png"
					alt=""
				/>
			</div>
		</div>
	</div>
</div>
