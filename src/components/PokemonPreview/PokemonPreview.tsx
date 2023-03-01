import { PokemonData, StatNames } from "@/data/PokemonData";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import { PokemonContext } from "src/context/PokemonContext";
import { getPokemonPreview } from "src/fetch/getPokemonPreview";

import PokemonType from "../PokemonType/PokemonType";
import PokemonPreviewSkeleton from "./PokemonPreviewSkeleton";

interface PokemonPreviewProps {
  url: string;
}

const PokemonPreview: React.FC<PokemonPreviewProps> = ({ url }) => {
  const { pokemon, changePokemon } = useContext(PokemonContext);

  const { data, isLoading, isError } = useQuery<PokemonData>(
    ["pokemon", url],
    () => getPokemonPreview(url)
  );

  const findStat = (data: PokemonData, statName: StatNames): number => {
    return (
      data.stats.find((item) => item.stat.name === statName)?.base_stat || 0
    );
  };

  const handleChosePokemon = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (isLoading || isError || !data) return;
    changePokemon({
      name: data.name,
      id: data.id,
      type: data.types.map((item) => item.type.name),
      attack: findStat(data, "attack"),
      defense: findStat(data, "defense"),
      hp: findStat(data, "hp"),
      spAttack: findStat(data, "special-attack"),
      spDefense: findStat(data, "special-defense"),
      speed: findStat(data, "speed"),
      weight: data.weight,
      totalMoves: data.moves.length,
      sprites: {
        ...data.sprites,
      },
    });
  };

  return (
    <>
      {!isLoading && data && (
        <div
          className={`p-4 max-w-[200px] w-full min-h-[260px] flex flex-col gap-4 items-center bg-slate-100 rounded-xl drop-shadow-md cursor-pointer ${
            !pokemon || pokemon.id !== data.id
              ? "border border-gray-400"
              : "border-2 border-violet-500"
          }`}
          onClick={(event) => handleChosePokemon(event)}
        >
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
              {data.types.map((type, index) => (
                <PokemonType type={type.type.name} key={index} />
              ))}
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
