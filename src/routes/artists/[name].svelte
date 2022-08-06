<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  import SpotifyWebApi from "spotify-web-api-node";
  import type { Album } from "../../types/album";

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
        },
      };
    }

    const albums = (await spotifyApi.getArtistAlbums(artist.id)).body.items;

    const preprocessedArtist = preprocessArtist(artist);
    const preproccessedAlbums = preprocessAlbums(albums).splice(0, 5);

    return {
      props: {
        artist: preprocessedArtist,
        albums: preproccessedAlbums,
      },
    };
  };
</script>

<script lang="ts">
  import type { Artist } from "src/types/artist";

  import preprocessAlbums from "$lib/utils/preprocess-albums";
  import preprocessArtist from "$lib/utils/preprocess-artist";
  import ArtistBanner from "../../components/ArtistBanner.svelte";
  import AlbumSection from "../../components/Album/AlbumSection.svelte";

  export let artist: Artist;

  export let albums: Album[];
</script>

<ArtistBanner {artist} />

<AlbumSection {albums} />
