import React, { useContext } from "react";
import LeftArrow from "./assets/LeftArrow";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonStats from "./components/PokemonStats/PokemonStats";
import { PokemonContext } from "./context/PokemonContext";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const { pokemon, changePokemon } = useContext(PokemonContext);
  const isPhone = useMediaQuery("(max-width: 640px)");

  const handleCloseModal = () => {
    changePokemon(null);
  };

  return (
    <main className="relative p-5 w-full h-full flex justify-center bg-slate-300">
      <section className="container flex flex-col items-center gap-8">
        <header className="py-4 px-12  bg-slate-50 rounded-xl drop-shadow-md">
          <h1 className="font-bold text-3xl">Pokedex</h1>
        </header>
        <div className="w-full h-full flex justify-center sm:justify-between sm:gap-10 gap-0 overflow-hidden">
          <div className="pr-2 flex-0 sm:flex-1 overflow-y-scroll scrollbar">
            <PokemonList />
          </div>

          <div className="hidden flex-0 sm:flex-1 sm:flex justify-center items-center overflow-y-auto">
            {pokemon && <PokemonStats pokemon={pokemon} />}
          </div>
        </div>
      </section>
      {isPhone && pokemon && (
        <div
          className="absolute top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-gray-300/75 overflow-hidden"
          onClick={handleCloseModal}
        >
          <button
            className="absolute top-5 left-5 w-12 h-12 z-20 p-2 flex justify-center items-center bg-emerald-800 rounded-full"
            onClick={handleCloseModal}
          >
            <LeftArrow />
          </button>
          <div onClick={(event) => event.stopPropagation()}>
            <PokemonStats pokemon={pokemon} />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
