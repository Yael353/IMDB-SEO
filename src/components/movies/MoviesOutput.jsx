import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function MoviesOutput() {
  const movies = useSelector((state) => state.movies.movies);
  const moviesStatus = useSelector((state) => state.movies.status);
  const dispatch = useDispatch();

  if (moviesStatus == "loading") {
    return <p>Loading</p>;
  }
  console.log(movies.loading);

  return (
    <div>
      <h1>Top 100 Movies!</h1>
      {movies && movies.map(<div> movieTitle: {movies.title}</div>)}
    </div>
  );
}
