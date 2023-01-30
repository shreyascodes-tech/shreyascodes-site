<script lang="ts">
	import { page } from '$app/stores';

	import { openModal } from 'svelte-modals';
	import type { PageData } from '../$types';
	import MobileNav from './MobileNav.svelte';

	let { admin } = $page.data as PageData;

	let links = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Projects',
			href: '#projects'
		},
		{
			name: 'Tools',
			href: '#tools'
		},
		{
			name: 'Contact',
			href: '#contact'
		},
		...(admin
			? [
					{
						name: 'Admin',
						href: '/admin'
					}
			  ]
			: [])
	];
</script>

<div class="container flex py-6 mx-auto justify-between items-center">
	<strong class="font-bold uppercase text-lg">Shreyas Mididoddi</strong>

	<ul class="lg:flex space-x-6 items-center relative hidden">
		{#each links as { href, name }}
			<li>
				<a
					class="px-4 py-3 font-semibold uppercase text-xs outline-none hover:bg-white/20 focus:bg-white/20 focus:ring rounded transition-all duration-75"
					{href}>{name}</a
				>
			</li>
		{/each}
	</ul>
	<button
		on:click={() => openModal(MobileNav, { links })}
		class="p-2 lg:hidden active:bg-white/20 rounded-full transition-colors duration-75"
		name="Menu"
	>
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
				d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
			/>
		</svg>
	</button>
</div>
