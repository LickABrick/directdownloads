<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/components/base/header/header.svelte';
	import { AboutDialog } from '$lib/components/base/about-dialog'
</script>
<title>DirectDownloads</title>
<ModeWatcher />
<div class="flex h-screen flex-col">
	<Header />
	<slot />
</div>
<AboutDialog />
