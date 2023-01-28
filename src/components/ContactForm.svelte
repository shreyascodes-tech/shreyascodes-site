<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';
	import type { ActionData } from '../routes/contact/$types';

	export let form: ActionData | undefined = undefined;
</script>

<div>
	<h3
		class="text-5xl font-bold leading-normal text-transparent bg-gradient-to-br bg-clip-text from-red-500 to-purple-500"
	>
		Let's get in touch
	</h3>
	<p class="text-xl font-medium text-gray-100">
		to build websites that are fast, beautiful and easy to use
	</p>
</div>

<form
	action="/contact"
	method="post"
	class="flex flex-col gap-4 w-full max-w-lg"
	use:enhance={({ form: f }) => {
		return ({ result }) => {
			// @ts-ignore
			form = result.data;
			if (form?.success) {
				f.reset();
			}
		};
	}}
>
	{#if form}
		<p
			transition:fade
			class="text-lg font-bold text-green-500 text-center"
			class:text-red-500={!form.success}
		>
			{form.message}
		</p>
	{/if}

	<div class="flex flex-col gap-2">
		<label for="name" class="self-start">Name</label>
		<input
			id="name"
			type="text"
			name="name"
			placeholder="Name"
			class="px-4 py-2 bg-gray-800 rounded-md"
		/>
	</div>
	<div class="flex flex-col gap-2">
		<label for="email" class="self-start">E-Mail</label>
		<input
			type="email"
			id="email"
			name="email"
			placeholder="Email"
			class="px-4 py-2 bg-gray-800 rounded-md"
		/>
	</div>
	<div class="flex flex-col gap-2">
		<label for="yu69hn" class="self-start">Favorite Color</label>
		<input
			type="text"
			name="yu69hn"
			id="yu69hn"
			placeholder="I like purple :)"
			class="px-4 py-2 bg-gray-800 rounded-md"
		/>
	</div>
	<div class="flex flex-col gap-2">
		<label for="email" class="self-start">Message</label>
		<textarea
			id="message"
			name="message"
			placeholder="Message"
			rows="5"
			class="px-4 py-2 bg-gray-800 rounded-md"
		/>
	</div>
	<button
		type="submit"
		class="px-4 py-2 text-white bg-purple-700 transition-all hover:bg-purple-600 active:bg-purple-900 active:scale-95 outline-none focus:ring ring-offset-2 ring-offset-gray-900 ring-indigo-600 rounded-md"
	>
		Send
	</button>
</form>
