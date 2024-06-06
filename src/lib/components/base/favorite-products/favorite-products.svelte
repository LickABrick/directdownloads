<script lang="ts">
	import items from '$lib/items.json';
    import * as Accordion from '$lib/components/ui/accordion';
    import * as Collapsible from "$lib/components/ui/collapsible";
	import { favorites } from '$lib/stores';
	import { ProductCard } from '../product-card';
	import { Button } from '$lib/components/ui/button';
	import { ChevronsUpDown } from 'lucide-svelte/icons';
</script>

<!-- <Accordion.Root value="favorites">
	<Accordion.Item value="favorites">
		<Accordion.Trigger class="font-semibold">Favorites</Accordion.Trigger>
		<Accordion.Content>
			<div class="mt-4 flex flex-col flex-wrap gap-4 p-4 md:flex-row">
				{#each $favorites.entries as item}
					<ProductCard item={items.find((i) => i.Name === item)} />
				{/each}
			</div>
		</Accordion.Content>
	</Accordion.Item>
</Accordion.Root> -->
<Collapsible.Root bind:open={$favorites.expanded}>
  <div class="flex items-center gap-2 pb-2">
    <Collapsible.Trigger asChild let:builder>
      <Button builders={[builder]} variant="ghost" size="sm" class="w-9 p-0">
        <ChevronsUpDown class="h-4 w-4" />
        <span class="sr-only">Toggle</span>
      </Button>
    <h4 class="text-sm font-semibold">Favorites</h4>
    </Collapsible.Trigger>
  </div>
  <Collapsible.Content>
    <div class="mt-4 flex flex-col flex-wrap gap-4 p-4 md:flex-row">
				{#each $favorites.entries as item}
					<ProductCard item={items.find((i) => i.Name === item)} />
				{/each}
			</div>
  </Collapsible.Content>
  <hr>
</Collapsible.Root>
