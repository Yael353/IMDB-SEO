import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  status: "idle",
  error: null,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await fetch(
    `https://imdb-top-100-movies.p.rapidapi.com/${import.meta.env.movieKey}`
  );

  const data = await response.json();
  console.log(data);

  return data;
});

//Slice

const movieSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.status = "succeded";
      })

      .addCase(fetchMovies.rejected, (state, action) => {
        state.movies = [];
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
