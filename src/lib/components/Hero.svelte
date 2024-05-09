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
			<p class="desktop:text-base text-sm max-w-full font-mono text-gray-600">
				A graduate Electrical Engineer turned Software Developer. Currently helping drive digital
				innovation through building web-based software for workflow automation in the smart building
				consulting industry. Let's connect and share ideas. Cheers!
			</p>
		</div>
		<div class="laptop:col-span-1 tablet:col-span-1 phone:grid-cols-1">
			<div class="w-full flex justify-center">
				<img
					class="max-w-[80%] rounded-lg border shadow-md duration-100 ease-in-out cursor-pointer hover:scale-105 transition"
					src="hompagepx.png"
					alt=""
				/>
			</div>
		</div>
	</div>
</div>
