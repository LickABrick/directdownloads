<script lang="ts">
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';

	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<Button on:click={toggleMode} variant="outline" size="sm">
	<Sun
    class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    size={16}
  />
  <Moon
    class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    size={16}
  />
</Button>
