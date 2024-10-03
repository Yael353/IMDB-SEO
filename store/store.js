import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../src/redux/fetures/movieSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
});
