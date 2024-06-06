<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { FileClock, History, Star } from 'lucide-svelte/icons';
	import * as Card from '$lib/components/ui/card';
	import { selectedProduct } from '$lib/stores';
	import type { Product } from '$lib/search';
	import { favorites } from '$lib/stores';

	function toggleFavorite(item: Product) {
		if ($favorites.entries.includes(item.Name)) {
			$favorites.entries = $favorites.entries.filter((i) => i !== item.Name);
		} else {
			$favorites.entries = [...$favorites.entries, item.Name];
		}
	}

	export let item: Product;
</script>

<Card.Root class="min-w-[350px] md:max-w-[350px]">
	<Card.Header>
		<Card.Title class="flex justify-items-center">
			{item.Name}
			<Button class="ml-auto" size="icon" variant="ghost" on:click={() => toggleFavorite(item)}>
				<Star
					class="hover:fill-amber-500 hover:text-amber-500 {$favorites.entries.includes(item.Name)
						? 'fill-amber-500 text-amber-500'
						: ''}"
				/>
			</Button>
		</Card.Title>
		<Card.Description>{item.Description}</Card.Description>
	</Card.Header>
	<Card.Content class="flex flex-col gap-2">
		<div class="flex gap-2">
			<Tooltip.Root openDelay={200}>
				<Tooltip.Trigger asChild let:builder>
					<Button
						builders={[builder]}
						href={item.Releases[0].DownloadUrl}
						target="_blank"
						class="w-full gap-2 font-semibold"
					>
						Download latest
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>{item.Releases[0].DownloadUrl}</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Button variant="outline" href={item.Releases[0].ReleaseNotes} target="_blank" size="icon">
				<FileClock size="18" />
			</Button>
		</div>
		<div>
			<Button
				variant="secondary"
				class="w-full gap-2 font-semibold"
				on:click={() => (($selectedProduct.open = true), ($selectedProduct.data = item))}
			>
				<History size="18" />
				More releases
			</Button>
		</div>
	</Card.Content>
</Card.Root>
