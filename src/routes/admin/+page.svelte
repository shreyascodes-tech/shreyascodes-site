<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { flip } from 'svelte/animate';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<header>
	<div class="container flex items-center mx-auto p-4">
		<h1 class="text-xl font-bold">Dashboard</h1>

		<a
			class="ml-auto px-4 py-3 font-semibold uppercase text-xs outline-none hover:bg-white/20 focus:bg-white/20 focus:ring rounded transition-all duration-75"
			href="/">Home</a
		>

		<form class="ml-8" action="/admin/auth?/logout" method="post" use:enhance>
			<button
				class="px-4 py-2 text-white bg-gray-700 transition-all hover:bg-gray-600 active:bg-gray-800 active:scale-95 outline-none focus:ring ring-offset-2 ring-offset-gray-900 ring-indigo-600 rounded-md"
				>Logout</button
			>
		</form>
	</div>
</header>
<main class="container mx-auto px-4 py-6">
	<div class="flex justify-between w-full max-w-lg items-center">
		<h2 class="text-4xl font-bold mb-4">Contact Form submissions</h2>
		<button on:click={() => invalidateAll()}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
				/>
			</svg>
		</button>
	</div>

	<div class="flex flex-wrap gap-6">
		{#if data.error}
			<p class="text-red-400">{data.error.message}</p>
		{:else}
			{#each data.data as item (item.id)}
				<details
					animate:flip={{ duration: 200 }}
					class="rounded-lg overflow-hidden w-full max-w-lg"
				>
					<summary class="flex justify-between items-center p-4 select-none bg-gray-800">
						{item.name}
						<form action="?/delete" method="post" use:enhance>
							<input type="hidden" name="id" value={item.id} />
							<button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-6 h-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
									/>
								</svg>
							</button>
						</form>
					</summary>
					<div class="p-4 bg-gray-800/40 overflow-y-visible flex flex-col">
						<p class="font-bold">{item.email}</p>
						<hr class="border-gray-700 my-3" />
						{#each (item.message ?? '').split('\n') as line}
							<p class="text-xl max-w-full">{line}</p>
						{/each}
					</div>
				</details>
			{/each}
		{/if}
	</div>
</main>
