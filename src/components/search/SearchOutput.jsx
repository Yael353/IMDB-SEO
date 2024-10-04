import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const highlightSearchTerm = (text, searchTerm) => {
  if (!searchTerm) return text; // Return org text if no search term
  const regex = new RegExp(`(${searchTerm})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, index) =>
    regex.test(part) ? (
      <strong key={index} className="font-bold">
        {part}
      </strong>
    ) : (
      part
    )
  );
};

function SearchOutput() {
  const { filteredMovies } = useSelector((state) => state.search);
  const searchTerm = useSelector((state) => state.search.searchTerm); // Get search term

  console.log("Filtered Movies: ", filteredMovies);

  if (!filteredMovies || filteredMovies.length === 0) {
    return (
      <div className="bg-white w-full max-w-[360px] mx-auto px-2 py-2">
        <p className="text-black">No movies found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="bg-white flex flex-col px-4 w-full max-w-[360px] mx-auto">
      <div>
        <ul>
          {filteredMovies.map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <li className="text-black flex flex-col py-2 border-b">
                {/* <h2 className="font-semibold">{movie.title}</h2> */}
                {/* <p>Genre: {movie.genre.join(", ")}</p>
              <p>Actors: {movie.actors.join(", ")}</p>
              <p>Rating: {movie.rating}</p> */}
                <h2 className="font-semibold">
                  {highlightSearchTerm(movie.title, searchTerm)}
                </h2>
                <p>
                  Genre:{" "}
                  {movie.genre
                    .map((g) => highlightSearchTerm(g, searchTerm))
                    .reduce((prev, curr) => [prev, ", ", curr])}
                </p>
                <p>
                  Actors:{" "}
                  {movie.actors
                    .map((actor) => highlightSearchTerm(actor, searchTerm))
                    .reduce((prev, curr) => [prev, ", ", curr])}
                </p>
                <p>Rating: {movie.rating}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchOutput;
