<script lang="ts">
	import { onMount } from 'svelte';
	import StarField from './StarField.svelte';

	onMount(() => {
		const heroEl = document.querySelector('#hero') as HTMLElement;
		const mainEl = document.querySelector('#main') as HTMLElement;
		const heaerEl = document.querySelector('#header') as HTMLElement;

		const headerHeight = heaerEl.offsetHeight;
		mainEl.style.height = `calc(100vh - ${headerHeight}px)`;
		heroEl.style.top = headerHeight - window.innerHeight + 'px';

		const resizeListener = () => {
			const headerHeight = heaerEl.offsetHeight;
			mainEl.style.height = `calc(100vh - ${headerHeight}px)`;
			heroEl.style.top = headerHeight - window.innerHeight + 'px';
		};

		window.addEventListener('resize', resizeListener);

		const scrollListener = () => {
			const scrollY = window.scrollY;
			heaerEl.classList.toggle('header-top', scrollY > window.innerHeight);
		};

		window.addEventListener('scroll', scrollListener);

		return () => {
			window.removeEventListener('resize', resizeListener);
			window.removeEventListener('scroll', scrollListener);
		};
	});
</script>

<div id="hero" class="sticky z-50 bg-black fade-in">
	<StarField />
	<main id="main" class="relative flex flex-col items-center justify-center h-screen text-center">
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
	<header
		id="header"
		class="w-full transition-all border-b-2 border-gray-800 bg-gray-900/10 z-100 backdrop-blur-sm max-h-min px-6 md:px-0"
	>
		<div class="container flex py-6 mx-auto">
			<strong>Shreyas Mididoddi</strong>
		</div>
	</header>
</div>

<style lang="postcss">
	:global(.header-top) {
		@apply bg-gray-900/60;
	}

	h1::first-letter {
		@apply text-white;
	}
</style>
