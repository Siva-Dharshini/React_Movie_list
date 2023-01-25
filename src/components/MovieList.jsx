import { MovieCard } from "./MovieCard"

export const MovieList = (props) => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-gray-500 text-center">
        Movie List
      </h1>
      <div className="flex gap-2 items-center justify-evenly flex-wrap">
        {props.movies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
};