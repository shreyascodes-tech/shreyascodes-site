<script lang="ts">
	import type { showcaseItems } from '../data';

	export let item: (typeof showcaseItems)[number];
</script>

<div
	class="block group outline-none overflow-hidden bg-gradient-to-br relative from-red-500/50 to-purple-500/50 hover:from-red-500 hover:to-purple-500 focus-within:from-red-500 focus-within:to-purple-500 p-[2px] max-w-lg w-full rounded aspect-[16/14] md:aspect-[16/10] bg-gray-800 shadow"
>
	<img
		src={item.image}
		class="block object-cover w-full h-full transition-transform"
		alt={item.title}
	/>

	<div
		class="scale-125 group-hover:scale-100 group-focus-within:scale-100 absolute inset-[2px] flex flex-col items-center justify-center transition-all opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 bg-black/80"
	>
		<strong class="text-2xl max-w-[20ch] md:max-w-max font-medium">
			<span class="font-semibold text-sky-400">{item.title}</span>
			{' • '}
			{item.subtitle}
		</strong>
		<p class="text-sm font-medium text-gray-100 max-w-[40ch] mt-4">
			{item.description}
		</p>
		{#if item.form}
			<form action={item.form.action} method={item.form.method}>
				{#each item.form.data as [name, value] (name)}
					<input type="hidden" {name} {value} />
				{/each}
				<button
					type="submit"
					class="mt-4 px-6 py-2 text-gray-100 border-2 border-current rounded text-sm uppercase font-bold bg-gray-50/0 hover:bg-gray-50/40 outline-none focus:bg-gray-50/40 transition-colors"
				>
					visit site
				</button>
			</form>
		{:else}
			<a
				href={item.link}
				class="mt-4 px-6 py-2 text-gray-100 border-2 border-current rounded text-sm uppercase font-bold bg-gray-50/0 hover:bg-gray-50/40 outline-none focus:bg-gray-50/40 transition-colors"
			>
				visit site
			</a>
		{/if}
	</div>
	<div
		class="absolute w-12 h-12 bottom-4 right-4 focus-within:ring ring-blue-700 rounded-lg outline-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity hover:opacity-100 focus:opacity-100"
	>
		<a href={item.github} class="outline-none">
			<img src="/img/github_logo.svg" alt="{item.title} - Github" />
		</a>
	</div>
</div>
