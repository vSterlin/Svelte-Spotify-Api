<script lang="ts">
  import type {Song} from "../../../types/song"
  import SongList from "./SongList.svelte";
  
  
  export let songs: Song[]
  </script>


{#each songs as song}
  <div class="flex">
    <h3>{song.title}</h3>
    <p>{song.duration}</p>
  </div>
{/each}