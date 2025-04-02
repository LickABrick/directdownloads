<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { showFirstVisitDialog } from '$lib/stores';
	import { Button } from '$lib/components/ui/button';
	import { BadgeInfo } from 'lucide-svelte';
	import { mediaQuery } from 'svelte-legos';

	const isDesktop = mediaQuery('(min-width: 768px)');
</script>

{#if $isDesktop}
	<AlertDialog.Root bind:open={$showFirstVisitDialog}>
		<AlertDialog.Trigger>
			<Button size="sm" variant="outline">
				<BadgeInfo size={16} />
			</Button>
		</AlertDialog.Trigger>
		<AlertDialog.Content class="max-h-[70vh] max-w-[80vw] overflow-auto md:w-[600px] lg:w-[800px]">
			<AlertDialog.Header>
				<AlertDialog.Title>Welcome to DirectDownloads!</AlertDialog.Title>
			</AlertDialog.Header>
			<p>
				We're dedicated to providing you with quick access to essential software tools commonly used
				by IT administrators. Before you proceed, please review the following important information:
			</p>
			<div>
				<h1 class="mb-1 text-lg font-semibold">Purpose of the site:</h1>
				<li class="ml-4">
					Our goal is to make it easier for IT professionals to find and download trusted software
					tools necessary for their daily tasks.
				</li>
			</div>
			<div>
				<h1 class="mb-1 text-lg font-semibold">Legal Notice:</h1>
				<li class="ml-4">
					All software provided on this website is subject to their respective licenses and terms of
					use.
				</li>
				<li class="ml-4">
					We do not host any of the software files ourselves; all downloads are direct links to the
					official sources.
				</li>
				<li class="ml-4">
					Ensure you comply with all software licensing agreements and use the tools responsibly.
				</li>
				<p class="text-sm italic">
					For legal inquiries, please contact us via email: <Button
						variant="link"
						href="mailto:d63yd9e0i@mozmail.com">d63yd9e0i@mozmail.com</Button
					>
				</p>
			</div>
			<p>
				By continuing to use this site, you acknowledge and agree to these terms. Thank you for
				visiting DirectDownloads!
			</p>
			<AlertDialog.Footer>
				<AlertDialog.Action class="font-semibold" on:click={() => showFirstVisitDialog.set(false)}
					>Understood</AlertDialog.Action
				>
			</AlertDialog.Footer>
		</AlertDialog.Content>
	</AlertDialog.Root>
{:else}
	<Drawer.Root bind:open={$showFirstVisitDialog} onClose={() => showFirstVisitDialog.set(false)}>
		<Drawer.Trigger on:click={() => localStorage.setItem('showFirstVisitDialog', 'false')}>
			<Button size="icon" variant="outline">
				<BadgeInfo />
			</Button>
		</Drawer.Trigger>
		<Drawer.Content>
			<Drawer.Header>
				<Drawer.Title>Welcome to DirectDownloads!</Drawer.Title>
			</Drawer.Header>
			<div class="p-4 text-sm">
			<p>
				We're dedicated to providing you with quick access to essential software tools commonly used
				by IT administrators. Before you proceed, please review the following important information:
			</p>
			<br>
			<div>
				<h1 class="mb-1 text-lg font-semibold">Purpose of the site:</h1>
				<li class="ml-4">
					Our goal is to make it easier for IT professionals to find and download trusted software
					tools necessary for their daily tasks.
				</li>
			</div>
			<br>
			<div>
				<h1 class="mb-1 text-lg font-semibold">Legal Notice:</h1>
				<li class="ml-4">
					All software provided on this website is subject to their respective licenses and terms of
					use.
				</li>
				<li class="ml-4">
					We do not host any of the software files ourselves; all downloads are direct links to the
					official sources.
				</li>
				<li class="ml-4">
					Ensure you comply with all software licensing agreements and use the tools responsibly.
				</li>
				<br>
				<p class="text-sm italic">
					For legal inquiries, please contact us via email: <Button
						variant="link"
						href="mailto:d63yd9e0i@mozmail.com">d63yd9e0i@mozmail.com</Button
					>
				</p>
			</div>
			<br>
			<p>
				By continuing to use this site, you acknowledge and agree to these terms. Thank you for
				visiting DirectDownloads!
			</p>
			</div>
			<Drawer.Footer>
				<Button class="font-semibold" on:click={() => showFirstVisitDialog.set(false)}
					>Understood</Button
				>
			</Drawer.Footer>
		</Drawer.Content>
	</Drawer.Root>
{/if}
