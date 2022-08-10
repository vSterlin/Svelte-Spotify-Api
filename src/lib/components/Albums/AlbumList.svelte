<script lang="ts">
  import type { Album } from "src/types/album";
  import AlbumCard from "./AlbumCard.svelte";

  export let albums: Album[];
</script>

<div class="flex justify-between overflow-x-scroll">
  {#each albums as album}
  <AlbumCard {album} />
  {/each}
</div>

