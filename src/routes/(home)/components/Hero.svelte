<script lang="ts">
	import { onMount } from 'svelte';
	import Header from './Header.svelte';
	import StarField from './StarField.svelte';

	let hero: HTMLDivElement;
	let header: HTMLElement;

	onMount(() => {
		const headerHeight = header.offsetHeight;
		hero.style.height = window.innerHeight + 'px';
		document.documentElement.style.scrollPaddingTop = headerHeight + 'px';

		let timeout: any;
		timeout = setTimeout(() => {
			hero.style.height = window.innerHeight - headerHeight + 'px';
			document.documentElement.style.scrollPaddingTop = headerHeight + 'px';
		}, 1000);

		const resizeListener = () => {
			const headerHeight = header.offsetHeight;
			hero.style.height = window.innerHeight - headerHeight + 'px';
			document.documentElement.style.scrollPaddingTop = headerHeight + 'px';
		};

		window.addEventListener('resize', resizeListener);

		return () => {
			clearTimeout(timeout);
			window.removeEventListener('resize', resizeListener);
		};
	});
</script>

<div bind:this={hero} class="bg-black h-screen fade-in transition-all">
	<StarField />
	<main class="relative flex flex-col items-center justify-center h-full text-center">
		<h1
			class="text-6xl font-bold leading-normal text-transparent uppercase bg-gradient-to-br bg-clip-text from-red-500 to-purple-500"
		>
			👋 Hi I'm <br /> Shreyas Mididoddi!
		</h1>
		<hr class="w-full max-w-md my-4 border-gray-700" />
		<p class="text-2xl font-medium text-gray-100">
			🧑‍💻 Tech enthusiast and a Passionate web developer 🚀
		</p>
	</main>
</div>

<header
	bind:this={header}
	class="w-full sticky top-0 transition-all border-b-2 border-gray-800 bg-gray-900/80 z-[100] backdrop-blur-sm max-h-min px-6 md:px-0"
>
	<Header />
</header>

<style lang="postcss">
	h1::first-letter {
		@apply text-white;
	}
</style>
