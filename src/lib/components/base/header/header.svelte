<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import logo from '$lib/images/logo.png';
	import { cn } from '$lib/utils.js';
	import { BadgeInfo, EllipsisVertical } from 'lucide-svelte';
	import ThemeToggle from '../theme-toggle/theme-toggle.svelte';
	import Searchbar from './searchbar.svelte';
	import SubmitLinkButton from './submit-link-button.svelte';
	import { AboutDialog } from '../about-dialog';
</script>

<div
	class={cn('col-span-2 sticky top-0 z-50 flex h-14 items-center border-b border-border/40 bg-background/95 p-2 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:px-6 justify-between gap-4')}
	{...$$restProps}
>
	<div class="flex flex-1">
		<img src={logo} class="mr-2 h-8 w-8" alt="" />
		<p class="hidden text-lg font-semibold md:block">DirectDownloads</p>
	</div>
	<div class="flex-1 justify-end gap-2 sm:flex">
		<Searchbar />
		<div class="hidden sm:flex gap-2 items-center">
			<SubmitLinkButton />
			<AboutDialog />
			<ThemeToggle />
		</div>
	</div>
	<div class="flex sm:hidden">
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button builders={[builder]} variant="ghost" size="icon">
					<EllipsisVertical />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content class="min-w-[50px] space-y-1">
				<SubmitLinkButton />
				<AboutDialog />
				<ThemeToggle />
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</div>
