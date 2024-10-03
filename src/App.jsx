import Hero from "./components/hero/Hero";
import MoviesOutput from "./components/movies/MoviesOutput";

function App() {
  return (
    <>
      <main className="w-full max-w-[90rem] mx-auto">
        <Hero />
        <MoviesOutput />
      </main>
    </>
  );
}

export default App;
