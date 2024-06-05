<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Switch } from '$lib/components/ui/switch';

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

<Dialog.Root>
	<Dialog.Trigger>
		<Button>Submit a link</Button>
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Submit a link</Dialog.Title>
			<Dialog.Description>
				Please enter the fields below and press submit to get redirected to a prepopulated github issue.
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
