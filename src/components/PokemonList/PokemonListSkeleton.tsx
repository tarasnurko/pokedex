import React from "react";
import PokemonPreviewSkeleton from "../PokemonPreview/PokemonPreviewSkeleton";

const PokemonListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <PokemonPreviewSkeleton key={index} />
        ))}
    </div>
  );
};

export default PokemonListSkeleton;
