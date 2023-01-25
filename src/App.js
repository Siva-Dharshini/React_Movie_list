
import {AddMovie} from "./components/AddMovieForm"
import {MovieList} from "./components/MovieList";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <AddMovie setMovies={setMovies} /> {/** set the movies state */}
      <MovieList movies={movies} /> {/** using the movies state */}
    </div>
  );
}

export default App;
/**
 * movieCard
 * movieList
 * createMovieForm
 * 
 */