<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils.js';
	import ThemeToggle from '../theme-toggle/theme-toggle.svelte';
	import Searchbar from './searchbar.svelte';
	import SubmitLinkButton from './submit-link-button.svelte';
</script>

<div
	class={cn('col-span-2 flex h-16 items-center justify-between bg-muted/30 p-4 shadow gap-4')}
	{...$$restProps}
>
	<div class="flex-1 hidden md:block">
		<p class="text-lg font-semibold">DirectDownloads</p>
	</div>
	<div class="flex flex-1 justify-center">
		<Searchbar />
	</div>
	<div class="flex flex-1 justify-end gap-4">
		<SubmitLinkButton />
		<ThemeToggle />
	</div>
</div>
