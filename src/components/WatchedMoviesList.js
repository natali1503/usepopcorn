import { WatchedMovie } from "./WatchedMovie";

export function WatchedMoviesList({
  watched,
  onDeleteWatchedMovie = { onDeleteWatchedMovie },
}) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatchedMovie={onDeleteWatchedMovie}
        />
      ))}
    </ul>
  );
}
