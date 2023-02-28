import React from "react";
import { PokemonTypes } from "@/data/PokemonTypes";

interface PokemonTypeProps {
  type: PokemonTypes;
}

const PokemonType: React.FC<PokemonTypeProps> = ({ type }) => {
  const colors: { [key in PokemonTypes]: string } = {
    bug: "",
    dark: "",
    dragon: "",
    electric:
      "text-slate-100 bg-yellow-600 hover:text-slate-700 hover:bg-yellow-400",
    fairy: "",
    fighting: "",
    fire: "",
    flying: "",
    ghost: "",
    grass: "",
    ground: "",
    ice: "",
    normal: "",
    poison:
      "text-slate-100 bg-violet-600 hover:text-slate-700 hover:bg-violet-400",
    psychic: "",
    rock: "",
    steel: "",
    water: "",
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
