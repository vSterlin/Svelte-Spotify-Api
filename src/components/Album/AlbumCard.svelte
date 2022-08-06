<script lang="ts">
  import type { Album } from "src/types/album";

  export let album: Album;
</script>

<div class="px-8 py-6 transition ease-in-out hover:bg-red-400 duration-300">
  <img src={album.imageUrl} alt={`${album.title} Album Cover`} />
  <div class="mt-4">
    
    <h3>{album.title}</h3>
    <h4>{album.releaseDate.substring(0, 4)}</h4>
  </div>
</div>
