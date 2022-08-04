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
    const preproccessedAlbums = preprocessAlbums(albums);

    return {
      props: {
        artistName: name,
        albums: preproccessedAlbums,
      },
    };
  };
</script>

<script lang="ts">
  import AlbumCard from "../../components/AlbumCard.svelte";
  import preprocessAlbums from "$lib/utils/preprocess-albums";

  export let artistName: string;

  export let albums: Album[];

  console.log(albums);
</script>

<h1>Albums by {artistName}</h1>
{#each albums as album}
  <AlbumCard {album} />
{/each}
