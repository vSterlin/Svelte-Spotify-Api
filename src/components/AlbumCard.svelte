<script lang="ts">
  import type { Album } from "src/types/album";

  export let album: Album;

</script>

<img src={album.image} alt={`${album.title} Album Cover`}>
<h3>{album.title}</h3>
<h4>{album.releaseDate}</h4>
<p>Total Tracks: {album.totalTracks}</p>
<hr />
