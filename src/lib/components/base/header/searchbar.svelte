<script lang="ts">
	import * as Command from '$lib/components/ui/command';
	import { onMount } from 'svelte';
	import items from '$lib/items.json';
	import { selectedProduct } from '$lib/stores';
	import { Button } from '$lib/components/ui/button';

	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.key === 's' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				open = !open;
			}
		}

		document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
	let open = false;
	let value = '';
</script>

<Button variant="outline" class="flex w-48 justify-start" on:click={() => (open = !open)}>
	<p class="text-muted-foreground">Search...</p>
	<kbd
		class="pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 md:inline-flex"
	>
		<span class="text-xs">⌘</span>S
	</kbd>
</Button>

<Command.Dialog bind:open>
	<Command.Input placeholder="Type to search..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Suggestions">
			{#each items as item}
				<Command.Item
					value={item.Name}
					onSelect={(currentValue) => {
						value = currentValue;
						console.log(item);
						$selectedProduct.open = true;
						$selectedProduct.data = item;
						open = false;
					}}
				>
					{item.Name}
				</Command.Item>
			{/each}
		</Command.Group>
	</Command.List>
</Command.Dialog>
