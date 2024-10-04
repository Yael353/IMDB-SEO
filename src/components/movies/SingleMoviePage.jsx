import React from "react";
import { useParams } from "react-router-dom";

export default function SingleMoviePage() {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));
  const movies = useSelector((state) => state.movies.movies);

  return <div>movie ID: {id}</div>;
}
