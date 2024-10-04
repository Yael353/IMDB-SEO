import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await fetch("data/movies.json");
    if (!response.ok) {
      throw new Error("Failed to fetch movies.");
    }
    const data = await response.json();
    // console.log("data: ", data);
    return data;
  } catch (error) {
    return error.message || error;
  }
});

// export const fetchMovies = createAsyncThunk(
//   "movies/fetchMovies",
//   async (_, { rejectWithValue }) => {
//     const url = "https://imdb-top-100-movies.p.rapidapi.com/";
//     const options = {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": import.meta.env.VITE_MOVIE_KEY,
//         "x-rapidapi-host": import.meta.env.VITE_MOVIE_HOST,
//       },
//     };

//     try {
//       const response = await axios.request(url, options);

//       console.log("resp data: ", response.data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response ? error.response.data : error.message
//       );
//     }
//   }
// );

//Slice
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })

      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default movieSlice.reducer;
