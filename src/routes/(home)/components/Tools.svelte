<script lang="ts">
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { tools } from '../data';
	const toolKeys = Object.keys(tools) as (keyof typeof tools)[];

	let activeTool: (typeof toolKeys)[number] = toolKeys[0]!;
</script>

<div class="w-full">
	<div class="flex py-2 w-full overflow-x-auto justify-center items-center gap-6">
		{#each toolKeys as key}
			<button
				class="text-white min-w-max text-sm uppercase hover:border-b-current transition-colors outline-none focus:border-b-current tracking-widest font-medium border-b border-b-transparent px-4 py-3"
				class:tab-active={key === activeTool}
				on:click={() => (activeTool = key)}
			>
				{key}
			</button>
		{/each}
	</div>
	<div
		class="relative flex flex-wrap items-center mt-8 justify-center w-full overflow-x-hidden gap-8"
	>
		{#each tools[activeTool] as tool (tool.title)}
			<div
				in:fly={{ x: 100, opacity: 0 }}
				out:fly={{ x: -100, opacity: 0 }}
				animate:flip
				class="w-32 aspect-square px-6 pt-4 pb-2 bg-gray-100 rounded-2xl flex flex-col gap-1 justify-center items-center"
			>
				<img class="drop-shadow-lg" src={tool.img} alt={tool.title} />
				<p class="text-black font-semibold text-center">{tool.title}</p>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.tab-active {
		@apply border-current text-purple-600;
	}
</style>
