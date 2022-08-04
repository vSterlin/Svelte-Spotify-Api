import type { Album } from "../types/album";

const preprocessAlbums = (
  albums: SpotifyApi.AlbumObjectSimplified[] = []
): Album[] => {
  const preprocessedlbums = albums
    .filter(({ album_type }) => album_type === "album")
    .map((album) => {
      const {
        name: title,
        total_tracks: totalTracks,
        release_date: releaseDate,
        images,
      } = album;

      return {
        title,
        totalTracks,
        releaseDate,
        image: images[1]?.url,
      };
    })
    .sort(
      (a, b) =>
        new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
    );

  return preprocessedlbums;
};
export default preprocessAlbums;
