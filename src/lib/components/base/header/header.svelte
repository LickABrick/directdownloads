<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import logo from '$lib/images/logo.png';
	import { cn } from '$lib/utils.js';
	import { BadgeInfo, EllipsisVertical } from 'lucide-svelte';
	import ThemeToggle from '../theme-toggle/theme-toggle.svelte';
	import Searchbar from './searchbar.svelte';
	import SubmitLinkButton from './submit-link-button.svelte';
</script>

<div
	class={cn('col-span-2 flex h-16 items-center justify-between gap-4 bg-muted/30 p-4 shadow')}
	{...$$restProps}
>
	<div class="flex flex-1">
		<img src={logo} class="mr-2 h-8 w-8" alt="" />
		<p class="hidden text-lg font-semibold md:block">DirectDownloads</p>
	</div>
	<div class="flex flex-1 justify-center">
		<Searchbar />
	</div>
	<div class="hidden flex-1 justify-end gap-2 sm:flex">
		<SubmitLinkButton />
		<Button size="icon" variant="outline">
			<BadgeInfo />
		</Button>
		<ThemeToggle />
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
				<div>
					<Button size="icon" variant="outline">
						<BadgeInfo />
					</Button>
				</div>
				<ThemeToggle />
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</div>
