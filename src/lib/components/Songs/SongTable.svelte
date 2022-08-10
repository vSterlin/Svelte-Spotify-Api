<script lang="ts">
  import type { Song } from "src/types/song";

  export let songs: Song[];
</script>

<div class="overflow-x-auto w-full">
  <table class="table w-full">
    <tbody>
      {#each songs as song}
        <tr>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="rounded-md w-12 h-12">
                  <img src={song.imageUrl} alt={`${song.title} Image`} />
                </div>
              </div>
              <div class="pl-3">
                <div class="font-bold">{song.title}</div>
              </div>
            </div>
          </td>

          
          <td class="font-light">
            {song.albumTitle}
          </td>
          <td>{song.duration}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
