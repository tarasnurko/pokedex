import { PokemonTypes } from "@/data/PokemonTypes";
import { createContext, useState } from "react";

export interface ChosenPokemon {
  name: string;
  id: number;
  type: PokemonTypes[];
  attack: number;
  defense: number;
  hp: number;
  spAttack: number;
  spDefense: number;
  speed: number;
  weight: number;
  totalMoves: number;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
}

export interface PokemonContextType {
  pokemon: ChosenPokemon | null;
  changePokemon: (newPokemon: ChosenPokemon | null) => void;
}

export const PokemonContext = createContext<PokemonContextType>({
  pokemon: null,
  changePokemon: () => {},
});

const PokemonProvider = ({ children }: { children: React.ReactNode }) => {
  const [pokemon, setPokemon] = useState<ChosenPokemon | null>(null);

  const changePokemon = (newPokemon: ChosenPokemon | null) => {
    if (!newPokemon || (pokemon && pokemon.id === newPokemon.id)) {
      setPokemon(null);
    } else {
      setPokemon(newPokemon);
    }
  };

  return (
    <PokemonContext.Provider value={{ pokemon, changePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
