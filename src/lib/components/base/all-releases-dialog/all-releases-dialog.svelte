<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import * as Popover from '$lib/components/ui/popover';
	import * as Alert from '$lib/components/ui/alert';
	import * as Drawer from '$lib/components/ui/drawer';
	import { mediaQuery } from 'svelte-legos';
	import { Siren, Calendar, Milestone, File, Hash, History } from 'lucide-svelte';
	import { selectedProduct } from '$lib/stores';

	const isDesktop = mediaQuery('(min-width: 768px)');
</script>

{#if $isDesktop}
	<Dialog.Root bind:open={$selectedProduct.open}>
		<Dialog.Content class="md:min-w-[800px]">
			<Dialog.Header>
				<Dialog.Title>{$selectedProduct.data?.Name}</Dialog.Title>
				<Dialog.Description>{$selectedProduct.data?.Description}</Dialog.Description>
				{#if $selectedProduct.data?.LoginRequired}
					<Alert.Root variant="destructive">
						<Siren class="h-4 w-4" />
						<Alert.Title>Heads up!</Alert.Title>
						<Alert.Description
							>Download & Release notes might require you to sign-in to the publishers website.</Alert.Description
						>
					</Alert.Root>
				{/if}
			</Dialog.Header>
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head class="w-auto">Release date</Table.Head>
						<Table.Head>Version</Table.Head>
						<Table.Head>Size</Table.Head>
						<Table.Head>Checksums</Table.Head>
						<Table.Head>Releasenotes</Table.Head>
						<Table.Head class="text-right"></Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each $selectedProduct.data?.Releases as release}
						<Table.Row>
							<Table.Cell class="font-medium">{new Intl.DateTimeFormat(navigator.language).format(new Date(release.ReleaseDate.split('-').reverse().map(Number)))}</Table.Cell>
							<Table.Cell>{release.Version}</Table.Cell>
							<Table.Cell>
								{#if release.Size}
									{release.Size}
								{:else}
									N/A
								{/if}
							</Table.Cell>
							<Table.Cell>
								{#if release.Checksums.length > 0}
									{#each release.Checksums as checksum}
										<Popover.Root>
											<Popover.Trigger>
												<Badge variant="outline">{checksum.Algorithm}</Badge>
											</Popover.Trigger>
											<Popover.Content class="w-auto">
												<p>{checksum.Checksum}</p>
											</Popover.Content>
										</Popover.Root>
									{/each}
								{:else}
									<Badge variant="outline">N/A</Badge>
								{/if}
							</Table.Cell>
							<Table.Cell>
								<Badge variant="outline" href={release.ReleaseNotes} target="_blank">
									{#if release.ReleaseNotes}
										View
									{:else}
										N/A
									{/if}
								</Badge>
							</Table.Cell>
							<Table.Cell class="text-right">
								<Button
									href={release.DownloadUrl}
									target="_blank"
									size="sm"
									class="gap-2 font-semibold"
								>
									Download
								</Button>
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Drawer.Root bind:open={$selectedProduct.open}>
		<Drawer.Content class="max-h-[60vh]">
			<Drawer.Header>
				<Drawer.Title>{$selectedProduct.data?.Name}</Drawer.Title>
				<Drawer.Description>
					{$selectedProduct.data?.Description}
				</Drawer.Description>
				{#if $selectedProduct.data?.LoginRequired}
					<Alert.Root variant="destructive">
						<Siren class="h-4 w-4" />
						<Alert.Title>Heads up!</Alert.Title>
						<Alert.Description
							>Download & Release notes might require you to sign-in to the publishers website.</Alert.Description
						>
					</Alert.Root>
				{/if}
			</Drawer.Header>
			<div class="flex flex-col gap-2 overflow-auto p-4">
				{#each $selectedProduct.data?.Releases as release}
					<div class="flex flex-col rounded border">
						<div class="flex">
							<p class="rounded-t border-r bg-primary p-2">
								<Calendar class="text-primary-foreground" />
							</p>
							<p class="p-2">{release.ReleaseDate}</p>
						</div>
						<div class="flex">
							<p class="border-t-r bg-primary p-2">
								<Milestone class="text-primary-foreground" />
							</p>
							<p class="p-2">{release.Version}</p>
						</div>
						<div class="flex">
							<p class="border-t-r bg-primary p-2">
								<File class="text-primary-foreground" />
							</p>
							<p class="p-2">
								{#if release.Size}
									{release.Size}
								{:else}
									N/A
								{/if}
							</p>
						</div>
						<div class="flex">
							<p class="border-t-r bg-primary p-2">
								<Hash class="text-primary-foreground" />
							</p>
							<p class="p-2">
								{#if release.Checksums.length > 0}
									{#each release.Checksums as checksum}
										<Popover.Root>
											<Popover.Trigger>
												<Badge variant="outline">{checksum.Algorithm}</Badge>
											</Popover.Trigger>
											<Popover.Content class="w-auto">
												<p>{checksum.Checksum}</p>
											</Popover.Content>
										</Popover.Root>
									{/each}
								{:else}
									<Badge variant="outline">N/A</Badge>
								{/if}
							</p>
						</div>
						<div class="flex">
							<p class="border-r bg-primary p-2">
								<History class="text-primary-foreground" />
							</p>
							<p class="p-2">
								<Badge variant="outline" href={release.ReleaseNotes} target="_blank">
									{#if release.ReleaseNotes}
										Releasenotes
									{:else}
										N/A
									{/if}
								</Badge>
							</p>
						</div>
						<Button
							href={release.DownloadUrl}
							target="_blank"
							size="sm"
							class="gap-2 font-semibold rounded-tl-none"
						>
							Download
						</Button>
					</div>
				{/each}
			</div>
			<!-- <Drawer.Footer>
				<Button>Close</Button>
			</Drawer.Footer> -->
		</Drawer.Content>
	</Drawer.Root>
{/if}
