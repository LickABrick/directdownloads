<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Switch } from '$lib/components/ui/switch';
	import * as Drawer from '$lib/components/ui/drawer';

	import { Plus } from 'lucide-svelte/icons';
	import { mediaQuery } from 'svelte-legos';

	const isDesktop = mediaQuery('(min-width: 768px)');

	let newLinkData = {
		Name: '',
		Publisher: '',
		Description: '',
		LoginRequired: false,
		Version: '',
		DownloadUrl: '',
		ReleaseDate: '',
		ReleaseNotes: '',
		Size: ''
	};
</script>

{#if $isDesktop}
	<Dialog.Root>
		<Dialog.Trigger>
			<Button class="md:hidden" size="icon">
				<Plus />
			</Button>
			<Button class="hidden font-semibold md:block">Submit a link</Button>
		</Dialog.Trigger>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Submit a link</Dialog.Title>
				<Dialog.Description>
					Please enter the fields below and press submit to get redirected to a prepopulated github
					issue.
				</Dialog.Description>
			</Dialog.Header>
			<div class="flex w-full flex-col gap-1.5">
				<Label for="name">Product name</Label>
				<Input bind:value={newLinkData.Name} type="text" id="name" />
			</div>
			<div class="flex w-full flex-col gap-1.5">
				<Label for="description">Description</Label>
				<Input bind:value={newLinkData.Description} type="text" id="description" />
			</div>
			<div class="flex w-full flex-col gap-1.5">
				<Label for="version">Version</Label>
				<Input bind:value={newLinkData.Version} type="text" id="version" placeholder="1.0.0" />
			</div>
			<div class="flex w-full flex-col gap-1.5">
				<Label for="downloadURL">Download URL</Label>
				<Input
					bind:value={newLinkData.DownloadUrl}
					type="text"
					id="downloadURL"
					placeholder="direct link to download"
				/>
			</div>
			<div class="flex items-center space-x-2">
				<Switch id="loginRequired" bind:checked={newLinkData.LoginRequired} />
				<Label for="loginRequired">Login is required to download</Label>
			</div>
			<Button
				href="https://github.com/LickABrick/directdownloads/issues/new?title={(newLinkData.Name,
				newLinkData.Version)}&body={JSON.stringify(newLinkData)}&labels=label1,label2"
				target="_blank"
			>
				Submit</Button
			>
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Drawer.Root>
		<Drawer.Trigger>
			<Button class="md:hidden" size="icon">
				<Plus />
			</Button>
			<Button class="hidden font-semibold md:block">Submit a link</Button>
		</Drawer.Trigger>
		<Drawer.Content>
			<Drawer.Header>
				<Drawer.Title>Submit a link</Drawer.Title>
				<Drawer.Description>
					Please enter the fields below and press submit to get redirected to a prepopulated github
					issue.
				</Drawer.Description>
			</Drawer.Header>
			<div class="flex flex-col gap-2 p-4">
				<div class="flex w-full flex-col gap-1.5">
					<Label for="name">Product name</Label>
					<Input bind:value={newLinkData.Name} type="text" id="name" />
				</div>
				<div class="flex w-full flex-col gap-1.5">
					<Label for="description">Description</Label>
					<Input bind:value={newLinkData.Description} type="text" id="description" />
				</div>
				<div class="flex w-full flex-col gap-1.5">
					<Label for="version">Version</Label>
					<Input bind:value={newLinkData.Version} type="text" id="version" placeholder="1.0.0" />
				</div>
				<div class="flex w-full flex-col gap-1.5">
					<Label for="downloadURL">Download URL</Label>
					<Input
						bind:value={newLinkData.DownloadUrl}
						type="text"
						id="downloadURL"
						placeholder="direct link to download"
					/>
				</div>
				<div class="flex items-center space-x-2">
					<Switch id="loginRequired" bind:checked={newLinkData.LoginRequired} />
					<Label for="loginRequired">Login is required to download</Label>
				</div>
			</div>

			<Drawer.Footer>
				<Button
					href="https://github.com/LickABrick/directdownloads/issues/new?title={(newLinkData.Name,
					newLinkData.Version)}&body={JSON.stringify(newLinkData)}&labels=label1,label2"
					target="_blank"
				>
					Submit</Button
				>
				<Drawer.Close>Cancel</Drawer.Close>
			</Drawer.Footer>
		</Drawer.Content>
	</Drawer.Root>
{/if}
