import React from "react";
import { PokemonTypes } from "@/data/PokemonTypes";

interface PokemonTypeProps {
  type: PokemonTypes;
}

const PokemonType: React.FC<PokemonTypeProps> = ({ type }) => {
  const colors: { [key in PokemonTypes]: string } = {
    bug: "text-gray-500 bg-green-400 hover:text-gray-700 hover:bg-green-200",
    dark: "text-slate-100 bg-zinc-800 hover:bg-zinc-400",
    dragon:
      "text-slate-200 bg-indigo-600 hover:text-slate-100 hover:bg-indigo-900",
    electric:
      "text-slate-100 bg-yellow-600 hover:text-slate-700 hover:bg-yellow-400",
    fairy:
      "text-slate-200 bg-fuchsia-500 hover:text-slate-100 hover:bg-fuchsia-700",
    fighting:
      "text-slate-200 bg-amber-900 hover:text-slate-100 hover:bg-amber-700",
    fire: "text-slate-200 bg-rose-500 hover:text-slate-200 hover:bg-rose-700",
    flying: "text-slate-200 bg-cyan-600 hover:text-slate-200 hover:bg-cyan-700",
    ghost: "text-slate-200 bg-cyan-800 hover:text-slate-100 hover:bg-cyan-900",
    grass:
      "text-neutral-900 bg-green-400 hover:text-neutral-700 hover:bg-green-300",
    ground:
      "text-neutral-700 bg-amber-500 hover:text-slate-200 hover:bg-amber-700",
    ice: "text-neutral-700 bg-teal-300 hover:text-slate-200 hover:bg-teal-700",
    normal:
      "text-neutral-600 bg-slate-200 hover:text-neutral-700 hover:bg-slate-300",
    poison:
      "text-slate-100 bg-violet-600 hover:text-slate-700 hover:bg-violet-400",
    psychic:
      "text-neutral-700 bg-red-400 hover:text-slate-200 hover:bg-red-500",
    rock: "text-slate-200 bg-amber-600 hover:text-slate-200 hover:bg-amber-800",
    steel:
      "text-neutral-700 bg-slate-300 hover:text-neutral-800 hover:bg-slate-400",
    water:
      "text-slate-200 bg-blue-500 hover:text-neutral-700 hover:bg-blue-400",
  };

  const baseStyles =
    "px-3 py-1 text-base text-slate-100 font-medium  rounded-md border border-gray-400 drop-shadow-sm hover:text-slate-700 transition-colors";

  return (
    <button className={`${baseStyles} ${colors[type]}`}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
  );
};

export default PokemonType;
