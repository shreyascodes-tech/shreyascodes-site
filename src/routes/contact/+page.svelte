<script lang="ts">
	import ContactForm from '../../components/ContactForm.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<main
	class="container flex flex-col items-center min-h-screen gap-16 justify-center px-4 py-8 mx-auto text-center"
>
	<ContactForm {form} />
</main>
