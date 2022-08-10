<script lang="ts">
  import type { Artist } from "src/types/artist";

  export let artist: Artist;
</script>

<div class="h-[70vh]">

  <div
    class={`w-full h-full flex justify-center items-center p-3 bg-cover bg-fixed relative`}
    style={`background-image: url(${artist.imageUrl}); background-position: 0 -200px;`}
  >
  <div class="bg-black opacity-60 absolute top-0 left-0 right-0 bottom-0 z-10"></div>
    <div class="text-white text-9xl bg-black p-3 z-20">
      <h1>{artist.name}</h1>
    </div>
  </div>
</div>
