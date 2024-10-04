import React, { useEffect } from "react";
import { fetchMovies } from "../../redux/fetures/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import { FaRegStar } from "react-icons/fa";


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
    <div className="h-auto py-10 px-4 2xl:px-0">
      <div>
        <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
          {/* {movies &&
            movies
              .slice(0, 2)
              .map((movie) => <li key={movie.id}>{movie.title}</li>)} */}
          {movies &&
            movies.map((movie) => (
              <li
                key={movie.id}
                className="flex flex-col w-full py-6 h-auto mx-auto bg-white text-black sm:shadow-yellow-400/70 shadow-md"
              >
                <div className="h-full px-4">
                  <div className="w-full h-[300px]">
                    <img
                      className="w-full h-full object-cover hover:object-contain"
                      src={movie.img}
                      alt={movie.title}
                    />
                  </div>
                  <div className="relative">
                    <h2 className="text-center text-xl font-semibold py-6">
                      {movie.title}
                    </h2>
                    <p>
                      <span className="font-semibold text-lg py-1">Genre:</span>{" "}
                      {movie.genre.join(", ")}
                    </p>

                    <i className="absolute flex flex-row items-center top-2 right-0">
                      Rating: {movie.rating} <FaRegStar className="pl-1"  size={20}/>

                    </i>
                    <ul>
                      <span className="font-semibold text-lg py-1">
                        Actors:
                      </span>
                      {movie.actors.map((actor, index) => (
                        <li key={index}> {actor}</li>
                      ))}
                    </ul>
                    <div>
                      <span className="text-lg font-semibold py-1">Plot:</span>
                      <p>{movie.about}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
