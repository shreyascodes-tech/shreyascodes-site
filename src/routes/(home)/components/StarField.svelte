<script lang="ts">
	import { onMount } from 'svelte';
	import { Star } from './star';
	const COUNT = 800;
	const SPEED = 0.1;

	onMount(() => {
		const stars = Array.from({ length: COUNT }, () => new Star(0, 0, 0));
		let rafId = 0;

		const canvas = document.querySelector('#starfield-canvas') as HTMLCanvasElement;
		const ctx = canvas.getContext('2d')!;

		const container = document.querySelector('#starfield') as HTMLElement;
		const resizeObserver = new ResizeObserver(setup);
		resizeObserver.observe(container);

		function setup() {
			rafId > 0 && cancelAnimationFrame(rafId);

			const { clientWidth: width, clientHeight: height } = container;
			const dpr = window.devicePixelRatio || 1;
			canvas.width = width * dpr;
			canvas.height = height * dpr;
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			ctx.scale(dpr, dpr);

			for (const star of stars) {
				star.x = Math.random() * width - width / 2;
				star.y = Math.random() * height - height / 2;
				star.z = 0;
			}

			ctx.translate(width / 2, height / 2);
			ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
			ctx.strokeStyle = 'white';
			rafId = requestAnimationFrame(frame);
		}

		function frame() {
			const { clientWidth: width, clientHeight: height } = container;

			for (const star of stars) {
				star.update(width, height, SPEED);
				star.draw(ctx);
			}

			ctx.fillRect(-width / 2, -height / 2, width, height);
			rafId = requestAnimationFrame(frame);
		}
	});
</script>

<div id="starfield" class="absolute inset-0">
	<canvas id="starfield-canvas" />
</div>
