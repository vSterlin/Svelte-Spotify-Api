<script lang="ts">
  import type { Album } from "src/types/album";
  import AlbumList from "./AlbumList.svelte";

  export let albums: Album[];
</script>

<div class="p-3 bg-slate-800 text-white">
  <h2 class="text-4xl ml-8">Albums</h2>
  <div class="mt-3">
    <AlbumList {albums} />
  </div>
</div>
