import Hero from "./components/hero/Hero";
import MoviesOutput from "./components/movies/MoviesOutput";
import SearchBar from "./components/search/SearchBar";
import SingleMoviePage from "./components/movies/SingleMoviePage";

function App() {
  return (
    <>
      <Hero />
      <div>
        <h1 className="text-white text-2xl py-10 text-center 2xl:text-4xl">
          Top Movies!
        </h1>
        <SearchBar />
        <MoviesOutput />
      </div>
      <SingleMoviePage />
    </>
  );
}

export default App;
