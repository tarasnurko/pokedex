import React from "react";
import PokemonList from "./components/PokemonList/PokemonList";

function App() {
  return (
    <main className="w-full min-h-full flex justify-center bg-slate-300">
      <section className="container flex flex-col items-center gap-14">
        <header className="mt-16 py-4 px-12  bg-slate-50 rounded-xl drop-shadow-md">
          <h1 className="font-bold text-3xl">Pokedex</h1>
        </header>
        <div className="w-full flex justify-between">
          <div className="flex-1">
            <PokemonList />
          </div>

          <div className="flex-1"></div>
        </div>
      </section>
    </main>
  );
}

export default App;
