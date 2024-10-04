import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "", //store search input
  filteredMovies: [], //store filtered movies
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
      setSearchTerm: (state, action) => {
        state.searchTerm = action.payload;
      },
      filterMovies: (state, action) => {
        const { movies } = action.payload;

        console.log("Movies received in filterMovies: ", movies);

        const term = state.searchTerm.toLowerCase();

        // Filter movies based on title, genre, actor
        state.filteredMovies = movies.filter((movie) => 
          movie.title.toLowerCase().includes(term) ||
          movie.genre.some((g) => g.toLowerCase().includes(term)) ||
          movie.actors.some((actor) => actor.toLowerCase().includes(term))
        );
      },
    },
  });

export const { setSearchTerm, filterMovies } = searchSlice.actions;

export default searchSlice.reducer;
