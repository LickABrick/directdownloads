<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ExternalLink, FileClock, History } from 'lucide-svelte/icons';
	import * as Card from '$lib/components/ui/card';
	import { selectedProduct } from '$lib/stores';
	import type { Product } from '$lib/search';

    export let item: Product;
</script>

<Card.Root class="min-w-[300px]">
	<Card.Header>
		<Card.Title>{item.Name}</Card.Title>
		<Card.Description>{item.Description}</Card.Description>
	</Card.Header>
	<Card.Content class="flex flex-col gap-2">
		<div class="flex gap-2">
			<Button
				href={item.Releases[0].DownloadUrl}
				target="_blank"
				class="w-full gap-2 font-semibold"
			>
				Download latest
			</Button>
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
