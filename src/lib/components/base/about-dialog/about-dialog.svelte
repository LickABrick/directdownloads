<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { Button } from '$lib/components/ui/button';
</script>

<AlertDialog.Root open={!localStorage.getItem('firstVisitDialogShown')}>
	<AlertDialog.Content class="max-w-[80vw] max-h-[70vh] overflow-auto md:min-w-[600px] lg:min-w-[800px]">
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
            <p class="italic text-sm">For legal inquiries, please contact us via email: <Button variant="link" href="mailto:d63yd9e0i@mozmail.com">d63yd9e0i@mozmail.com</Button></p>
		</div>
		<p>
			By continuing to use this site, you acknowledge and agree to these terms. Thank you for
			visiting DirectDownloads!
		</p>
		<AlertDialog.Footer>
			<AlertDialog.Action class="font-semibold" on:click={() => localStorage.setItem('firstVisitDialogShown', 'true')}
				>Understood</AlertDialog.Action
			>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
