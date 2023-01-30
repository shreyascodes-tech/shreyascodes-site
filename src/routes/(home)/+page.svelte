<script lang="ts">
	import ContactForm from '../../components/ContactForm.svelte';
	import Hero from './components/Hero.svelte';
	import ShowcaseCard from './components/ShowcaseCard.svelte';
	import Tools from './components/Tools.svelte';
	import { showcaseItems } from './data';
</script>

<svelte:head>
	<title>Shreyas Mididoddi!</title>
</svelte:head>

<Hero />
<section
	class="container flex flex-col items-center min-h-screen gap-12 px-4 py-8 mx-auto text-center justify-evenly"
	id="projects"
>
	<div>
		<h2
			class="text-5xl font-bold leading-normal text-transparent bg-gradient-to-br bg-clip-text from-red-500 to-purple-500"
		>
			I make websites
		</h2>
		<p class="text-xl font-medium text-gray-100">
			using modern technologies that look great and feel great
		</p>
	</div>

	<div class="flex flex-wrap items-center justify-center w-full gap-8">
		{#each showcaseItems as item}
			<ShowcaseCard {item} />
		{/each}
	</div>
</section>
<div class="bg-gray-800">
	<section
		class="container flex flex-col items-center min-h-screen gap-16 justify-center px-4 py-8 mx-auto text-center"
		id="tools"
	>
		<div>
			<h2
				class="text-5xl font-bold leading-normal text-transparent bg-gradient-to-br bg-clip-text from-red-500 to-purple-500"
			>
				I use tools
			</h2>
			<p class="text-xl font-medium text-gray-100">
				to build websites that are fast, beautiful and easy to use
			</p>
		</div>

		<Tools />
	</section>
</div>
<section
	class="container flex flex-col items-center min-h-screen gap-16 justify-center px-4 py-8 mx-auto text-center"
	id="contact"
>
	<ContactForm />
</section>
