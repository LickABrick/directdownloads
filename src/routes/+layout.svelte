<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/components/base/header/header.svelte';
</script>
<title>DirectDownloads</title>
<ModeWatcher />
<div class="flex h-screen flex-col">
	<Header />
	<slot />
</div>
