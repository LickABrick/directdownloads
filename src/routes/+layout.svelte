<script lang="ts">
	import '../app.css';
      import { ModeWatcher } from "mode-watcher";
      import Header from '$lib/components/base/header/header.svelte';
</script>
<ModeWatcher />
<div class="flex h-screen flex-col">
    <Header />
	<div class="flex h-[calc(100vh)]">
		<slot />
	</div>
</div>