import type { Artist } from "../../types/artist";

const preprocessArtist = (
  artist: SpotifyApi.ArtistObjectFull
): Artist => {

  const { name, images} = artist

  return {
    name,
   imageUrl: images[0].url
  }
}

export default preprocessArtist