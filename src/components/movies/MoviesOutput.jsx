import React, { useEffect } from "react";
import { fetchMovies } from "../../redux/fetures/movieSlice";
import { useSelector, useDispatch } from "react-redux";

export default function MoviesOutput() {
  const dispatch = useDispatch();

  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (loading) {
    return <p className="">loading..</p>;
  }

  if (error) {
    return <p className="text-red-600">{error.message || error}</p>;
  }

  return (
    <div className="pt-80">
      <h1>Top 100 Movies!</h1>
      <div>
        <ul className="bg-black flex flex-wrap gap-10">
          {/* {movies &&
            movies
              .slice(0, 2)
              .map((movie) => <li key={movie.id}>{movie.title}</li>)} */}
          {movies &&
            movies.map((movie) => (
              <li
                key={movie.id}
                className="flex flex-col max-w-[600px] mx-auto bg-white px-10 py-20 text-black shadow-yellow-400 shadow-md"
              >
                <div>
                  <div>
                    <img src={movie.img} alt={movie.title} />
                  </div>
                  <h2>{movie.title}</h2>
                  <p>Genre: {movie.genre.join(", ")}</p>

                  <p>{movie.rating}</p>
                  <ul>
                    {movie.actors.map((actor, index) => (
                      <li key={index}>{actor}</li>
                    ))}
                  </ul>
                  <div>
                    <h3>Plot:</h3>
                    <p>{movie.about}</p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
