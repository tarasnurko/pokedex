import React, { useContext } from "react";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonStats from "./components/PokemonStats/PokemonStats";
import { PokemonContext } from "./context/PokemonContext";

function App() {
  const { pokemon } = useContext(PokemonContext);

  return (
    <main className="p-10 w-full h-full flex justify-center bg-slate-300">
      <section className="container flex flex-col items-center gap-14">
        <header className="py-4 px-12  bg-slate-50 rounded-xl drop-shadow-md">
          <h1 className="font-bold text-3xl">Pokedex</h1>
        </header>
        <div className="w-full flex justify-between gap-20 overflow-hidden">
          <div className="pr-2 flex-1 overflow-y-scroll scrollbar">
            <PokemonList />
          </div>

          <div className="flex-1 flex justify-center items-center">
            {pokemon && <PokemonStats pokemon={pokemon} />}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
