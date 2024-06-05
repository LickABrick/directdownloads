<script lang="ts">
	import { cn } from '$lib/utils.js';
	import ThemeToggle from '../theme-toggle/theme-toggle.svelte';
</script>

<div class={cn('flex h-16 bg-muted/30 shadow col-span-2')} {...$$restProps}>
	<div class="ml-4 flex gap-6 items-center justify-center">
		<!-- <img src="{ logo }" alt="logo" class="h-10 w-10"> -->
		<p class="font-semibold text-lg">DirectDownloads.pages.dev</p>
	</div>
	<div class="ml-auto mr-6 flex gap-6 items-center justify-center">
		<ThemeToggle />
	</div>
</div>