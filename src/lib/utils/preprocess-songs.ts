import type { Song } from "../../types/song";

const millisecondsToMinutes = (milliseconds: number): string => {
  const seconds = Math.floor((milliseconds / 1000) % 60);

const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
  return `${minutes}:${seconds}`;
}

const preprocessSongs = (songs: SpotifyApi.TrackObjectFull[]): Song[] => {

  const preprocessedSongs = songs.map((song) => {
    const { name: title, duration_ms, popularity } = song;

    return {
      title,
      duration: millisecondsToMinutes(duration_ms),
      popularity,
      imageUrl: song.album.images.pop()!.url,
      albumTitle: song.album.name
    };
  });

  return preprocessedSongs;
};

export default preprocessSongs;
