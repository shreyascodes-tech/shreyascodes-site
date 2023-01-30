<script lang="ts">
	import { Modals, closeModal } from 'svelte-modals';
	import { fade } from 'svelte/transition';
	import '../app.postcss';
</script>

<slot />
<Modals>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		transition:fade
		slot="backdrop"
		class="fixed inset-0 bg-gray-900 z-[999]"
		on:click={closeModal}
	/>
</Modals>
