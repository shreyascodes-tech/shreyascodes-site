<script lang="ts">
	import { closeModal } from 'svelte-modals';
	export let isOpen: boolean;
	export let links: { name: string; href: string }[];
</script>

{#if isOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="fixed w-full h-full inset-0 z-[1000] flex flex-col p-6" on:click|self={closeModal}>
		<div class="flex justify-between items-center">
			<strong class="text-2xl font-medium text-white">Menu</strong>

			<button
				class="p-2 active:bg-white/20 rounded-full transition-colors duration-75"
				on:click={closeModal}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>

		<ul class="my-auto">
			{#each links as { name, href }}
				<li>
					<a
						on:click={closeModal}
						class="block py-4 text-center text-2xl font-bold active:bg-gray-400/40 rounded transition-colors"
						{href}>{name}</a
					>
				</li>
			{/each}
		</ul>
	</div>
{/if}
