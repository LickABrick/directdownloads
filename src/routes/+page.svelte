<script lang="ts">
	import items from '$lib/items.json';
	import { AllReleasesDialog } from '$lib/components/base/all-releases-dialog';
	import ProductCard from '$lib/components/base/product-card/product-card.svelte';
	import { FavoriteProducts } from '$lib/components/base/favorite-products';
</script>
<div class="px-4">
<FavoriteProducts />
</div>
<div class="mt-4 flex flex-col md:flex-row gap-4 p-4 flex-wrap">
	{#each items as item}
		<ProductCard {item} />
	{/each}
</div>
<AllReleasesDialog />
