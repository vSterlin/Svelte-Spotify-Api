<script lang="ts">
  import type { Song } from "../../../types/song";
  import SongList from "./SongList.svelte";
  import SongTable from "./SongTable.svelte";

  export let songs: Song[];
</script>

<div class="p-3 bg-slate-800 text-white">
  <h2 class="text-4xl ml-8">Albums</h2>
  <div class="mt-3 px-8">
    <SongTable {songs} />
  </div>
</div>
