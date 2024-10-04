import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterMovies, setSearchTerm } from "../../redux/fetures/searchSlice";
import SearchOutput from "./SearchOutput";

function SearchBar() {
  const [searchWord, setSearchWord] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const handleSearch = (e) => {
    e.preventDefault();

    dispatch(setSearchTerm(searchWord)); //update search term
    dispatch(filterMovies({ movies }));

    console.log("searched clicked");
    setSearchWord("")
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="w-full max-w-[360px] mx-auto">
        <label htmlFor="searchInput"></label>
        <input
          className="px-2 py-1 border w-full text-black"
          placeholder="Search"
          type="text"
          id="searchInput"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        {/* <button type="submit">Search</button> */}
      </form>
      <SearchOutput />
    </div>
  );
}

export default SearchBar;
