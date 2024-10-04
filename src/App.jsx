import Hero from "./components/hero/Hero";
import MoviesOutput from "./components/movies/MoviesOutput";
import SingleMoviePage from "./components/movies/SingleMoviePage";

function App() {
  return (
    <>
      <Hero />
      <div>
        <h1 className="text-white text-2xl py-10 text-center 2xl:text-4xl">
          Top Movies!
        </h1>
        <MoviesOutput />
      </div>
      <SingleMoviePage />
    </>
  );
}

export default App;
