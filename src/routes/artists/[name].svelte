<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  import SpotifyWebApi from "spotify-web-api-node";

  export const load: Load = async ({ fetch, params }) => {
    const { name } = params;

    const spotifyApi = new SpotifyWebApi({
      clientId: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
      clientSecret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
      redirectUri: "http://127.0.0.1:5173/",
      accessToken: import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN,
    });

    const artist = (await spotifyApi.searchArtists(name)).body.artists
      ?.items[0];

    if (!artist) {
      return {
        props: {
          artistName: name,
          albums: [],
          songs: [],
        },
      };
    }

    const albums = (await spotifyApi.getArtistAlbums(artist.id)).body.items;
    const topSongs = (await spotifyApi.getArtistTopTracks(artist.id, "US")).body
      .tracks;

    const preproccessedSongs = preprocessSongs(topSongs);
    const preprocessedArtist = preprocessArtist(artist);
    const preproccessedAlbums = preprocessAlbums(albums).splice(0, 5);

    return {
      props: {
        artist: preprocessedArtist,
        albums: preproccessedAlbums,
        songs: preproccessedSongs,
      },
    };
  };
</script>

<script lang="ts">
  import type { Artist } from "src/types/artist";
  import type { Song } from "src/types/song";
  import type { Album } from "../../types/album";

  import preprocessAlbums from "$lib/utils/preprocess-albums";
  import preprocessArtist from "$lib/utils/preprocess-artist";
  import preprocessSongs from "$lib/utils/preprocess-songs";

  import ArtistBanner from "../../lib/components/ArtistBanner.svelte";
  import AlbumSection from "../../lib/components/Albums/AlbumSection.svelte";
  import SongSection from "../../lib/components/Songs/SongSection.svelte";

  export let artist: Artist;
  export let albums: Album[];
  export let songs: Song[];
</script>

<ArtistBanner {artist} />
<AlbumSection {albums} />
<SongSection {songs} />
