import { PokemonData } from "@/data/PokemonData";
import React from "react";
import { useQuery } from "react-query";
import { getPokemonPreview } from "src/fetch/getPokemonPreview";

import PokemonType from "../PokemonType/PokemonType";
import PokemonPreviewSkeleton from "./PokemonPreviewSkeleton";

interface PokemonPreviewProps {
  url: string;
}

const PokemonPreview: React.FC<PokemonPreviewProps> = ({ url }) => {
  const { data, isLoading, isError } = useQuery<PokemonData>(
    ["pokemon", url],
    () => getPokemonPreview(url)
  );

  console.log(data);

  return (
    <>
      {!isLoading && data && (
        <div className="p-4 max-w-50 w-fit min-h-60] flex flex-col gap-4 items-center bg-slate-100 border border-gray-400 rounded-xl drop-shadow-md cursor-pointer">
          <img
            src={data.sprites.front_default || data.sprites.front_shiny}
            alt={data?.name.charAt(0).toUpperCase() + data?.name.slice(1)}
            className="w-28 h-28 object-cover"
          />
          <div className="w-full flex flex-col gap-2">
            <h3 className="text-center text-lg font-extrabold">
              {data?.name.charAt(0).toUpperCase() + data?.name.slice(1)}
            </h3>
            <div className="flex flex-wrap gap-2">
              <PokemonType type="poison" />
              <PokemonType type="electric" />
            </div>
          </div>
        </div>
      )}

      {isLoading && !isError && <PokemonPreviewSkeleton />}
      {!isLoading && isError && <p>error</p>}
    </>
  );
};

export default PokemonPreview;
