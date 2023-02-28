import React from "react";
import PokemonTypeSkeleton from "../PokemonType/PokemonTypeSkeleton";

const PokemonPreviewSkeleton = () => {
  return (
    <div className="p-4 w-50 h-60 flex flex-col gap-4 items-center bg-slate-100 border border-gray-400 rounded-xl drop-shadow-md">
      <div className="animate-pulse w-28 h-28 bg-gray-400 rounded-xl" />
      <div className="w-full flex flex-col gap-2">
        <div className="animate-pulse mx-auto w-32 h-7 bg-gray-500 rounded-xl" />

        <div className="flex flex-wrap gap-2">
          <PokemonTypeSkeleton />
          <PokemonTypeSkeleton />
        </div>
      </div>
    </div>
  );
};

export default PokemonPreviewSkeleton;
