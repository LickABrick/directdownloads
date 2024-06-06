<script lang="ts">
	import logo from '$lib/images/logo.png';
	import { cn } from '$lib/utils.js';
	import ThemeToggle from '../theme-toggle/theme-toggle.svelte';
	import Searchbar from './searchbar.svelte';
	import SubmitLinkButton from './submit-link-button.svelte';
</script>

<div
	class={cn('col-span-2 flex h-16 items-center justify-between gap-4 bg-muted/30 p-4 shadow')}
	{...$$restProps}
>
	<div class="flex-1 flex">
		<img src="{logo}" class="h-8 w-8 mr-2" alt="">
		<p class="text-lg font-semibold hidden md:block">DirectDownloads</p>
	</div>
	<div class="flex flex-1 justify-center">
		<Searchbar />
	</div>
	<div class="flex flex-1 justify-end gap-4">
		<SubmitLinkButton />
		<ThemeToggle />
	</div>
</div>
