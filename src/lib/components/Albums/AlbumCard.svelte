<script lang="ts">
  import type { Album } from "src/types/album";
 
  export let album: Album;
</script>

<!-- <div class="px-8 py-6 transition ease-in-out hover:bg-red-400 duration-300">
  <img src={album.imageUrl} alt={`${album.title} Album Cover`} />
  <div class="mt-4">
    
    <h3>{album.title}</h3>
    <h4>{album.releaseDate.substring(0, 4)}</h4>
  </div>
</div> -->

 
<div class="card w-64 bg-base-100 shadow-xl image-full">
  <figure>
    <img src={album.imageUrl} alt={`${album.title} Album Cover`} />

  </figure>
  <div class="card-body">
    <h2 class="card-title text-white">{album.title}</h2>


      <p>{album.releaseDate.substring(0, 4)} - {album.totalTracks} Tracks Total</p>
      

    <div class="card-actions justify-end">
      <button class="btn btn-secondary">Play</button>
    </div>
  </div>
</div>