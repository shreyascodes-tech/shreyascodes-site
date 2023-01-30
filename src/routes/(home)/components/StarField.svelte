<script lang="ts">
	import { onMount } from 'svelte';
	import { Star } from './star';
	const COUNT = 800;
	const SPEED = 0.1;

	let container: HTMLElement;
	let canvas: HTMLCanvasElement;
	const stars = Array.from({ length: COUNT }, () => new Star(0, 0, 0));
	let rafId = 0;

	function setup(ctx: CanvasRenderingContext2D) {
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
		rafId = requestAnimationFrame(() => frame(ctx));
	}

	function frame(ctx: CanvasRenderingContext2D) {
		const { clientWidth: width, clientHeight: height } = container;

		for (const star of stars) {
			star.update(width, height, SPEED);
			star.draw(ctx);
		}

		ctx.fillRect(-width / 2, -height / 2, width, height);
		rafId = requestAnimationFrame(() => frame(ctx));
	}

	onMount(() => {
		const ctx = canvas.getContext('2d')!;

		const resizeObserver = new ResizeObserver(() => setup(ctx));
		resizeObserver.observe(container);

		return () => {
			cancelAnimationFrame(rafId);
			resizeObserver.disconnect();
		};
	});
</script>

<div bind:this={container} class="absolute inset-0">
	<canvas bind:this={canvas} />
</div>
