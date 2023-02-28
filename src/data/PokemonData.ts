import { PokemonTypes } from "./PokemonTypes";

type StatNames =
  | "attack"
  | "defense"
  | "hp"
  | "special-attack"
  | "special-defense"
  | "speed";

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: StatNames;
    url: string;
  };
}

export interface PokemonData {
  name: string;
  types: { slot: number; type: { name: PokemonTypes; url: string } }[];
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  stats: Stat[];
  weight: number;
  moves: { move: { name: string; url: string } }[];
}
