<script>
	import { enhance } from '$app/forms';
</script>

<svelte:head>
	<title>Admin Login</title>
</svelte:head>

<main class="container mx-auto px-4 py-6">
	<h1 class="text-4xl font-bold text-center">Admin Login</h1>
	<form
		use:enhance
		action="?/login"
		method="post"
		class="flex flex-col mt-6 gap-4 w-full max-w-lg mx-auto"
	>
		<input class="px-4 py-2 bg-gray-800 rounded-md" type="email" name="email" placeholder="email" />
		<input
			class="px-4 py-2 bg-gray-800 rounded-md"
			type="password"
			name="password"
			placeholder="password"
		/>
		<button
			class="px-4 py-2 text-white bg-purple-700 transition-all hover:bg-purple-600 active:bg-purple-900 active:scale-95 outline-none focus:ring ring-offset-2 ring-offset-gray-900 ring-indigo-600 rounded-md"
		>
			Login
		</button>
	</form>
</main>
