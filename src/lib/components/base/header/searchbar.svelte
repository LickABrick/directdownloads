<script lang="ts">
	import { createProductIndex, searchProductIndex, type Product } from '$lib/search';
	import { Input } from '$lib/components/ui/input';
	import * as Command from '$lib/components/ui/command';
	import * as Popover from '$lib/components/ui/popover';
	import { onMount, tick } from 'svelte';
	import items from '$lib/items.json';
	import { selectedProduct } from '$lib/stores';

	let search: 'loading' | 'ready' = 'loading';
	let searchTerm = '';
	let results: any[] = [];

	onMount(async () => {
		// create search index
		createProductIndex(items);
		// we're in business 🤝
		search = 'ready';
	});

	$: if (search === 'ready') {
		// runs each time `searchTerm` updates
		results = searchProductIndex(searchTerm);
	}
    $: console.log(results)
	let open = false;
    let value = '';

	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}
</script>

{#if search === 'ready'}
	<Popover.Root bind:open let:ids disableFocusTrap openFocus={false}>
		<Popover.Trigger >
			<Input
				bind:value={searchTerm}
				placeholder="Search products..."
				autocomplete="off"
				spellcheck="false"
				type="search"
                class="w-[65vw] lg:w-[40vw]"
			/>
		</Popover.Trigger>
		<Popover.Content class="w-[60vw] lg:w-[40vw]">
           
			<Command.Root>
				<!-- <Command.Input placeholder="Search framework..." /> -->
				<Command.Empty>No results found</Command.Empty>
				<Command.Group>
					{#each results as result}
						<Command.Item
							value={result.Name}
							onSelect={(currentValue) => {
								value = currentValue;
                                console.log(result)
                                $selectedProduct.open = true
                                $selectedProduct.data = result
								closeAndFocusTrigger(ids.trigger);
							}}
						>
							{result.Name}
						</Command.Item>
					{/each}
				</Command.Group>
			</Command.Root>
		</Popover.Content>
	</Popover.Root>

{/if}
