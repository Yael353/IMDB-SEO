import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../src/redux/fetures/movieSlice";
import searchSlice from "../src/redux/fetures/searchSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    search: searchSlice
  },
});
