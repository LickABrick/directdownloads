<script lang="ts">
	import items from '$lib/items.json';
	import { Button } from '$lib/components/ui/button';
	import { Milestone, ExternalLink, FileClock } from 'lucide-svelte/icons';
	import * as Card from '$lib/components/ui/card';
	import * as Accordion from '$lib/components/ui/accordion';
</script>

<div>
	{#each items as item}
		<Card.Root>
			<Card.Header>
				<Card.Title>{item.Name}</Card.Title>
				<Card.Description>{item.Description}</Card.Description>
			</Card.Header>
			<Card.Content>
				<Accordion.Root multiple>
					{#each item.Releases as release, index}
						<Accordion.Item value={index.toString()}>
							<Accordion.Trigger>
								{release.Version}
								<span class="italic text-xs">({release.ReleaseDate})</span>
							</Accordion.Trigger>
							<Accordion.Content>
                                <div>
                                    <p class="pb-4">Size: {release.Size}</p>
                                </div>
								<Button href={release.DownloadUrl} class="gap-2 font-semibold">
                                    <ExternalLink size="18" />
                                    Download
                                </Button>
                                <Button variant="outline" href={release.ReleaseNotes} size="icon">
                                    <FileClock size="18" />
                                </Button>
                                <div class="pt-4">
{#each release.Checksums as checksum}
                                        <p class="italic">Checksum ({checksum.Algorithm}): {checksum.Checksum}</p>
                                    {/each}
                                </div>
                                
							</Accordion.Content>
						</Accordion.Item>
					{/each}
				</Accordion.Root>
			</Card.Content>
			<!-- <Card.Footer>
				<p>Card Footer</p>
			</Card.Footer> -->
		</Card.Root>
	{/each}
</div>
