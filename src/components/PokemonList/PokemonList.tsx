import React from "react";
import { useQuery } from "react-query";
import {
  getPokemonNames,
  GetPokemonNamesRes,
} from "../../fetch/getPokemonNames";
import PokemonPreview from "../PokemonPreview/PokemonPreview";
import PokemonListSkeleton from "./PokemonListSkeleton";

const PokemonList = () => {
  const { data, isLoading, isError } = useQuery<GetPokemonNamesRes>(
    "pokemonNames",
    () => getPokemonNames({ limit: 12, offset: 0 })
  );

  return (
    <>
      {!isLoading && data && (
        <div className="grid grid-cols-3 gap-4">
          {data?.results.map((item) => (
            <PokemonPreview url={item.url} key={item.name} />
          ))}
        </div>
      )}
      {isLoading && !isError && <PokemonListSkeleton />}
      {!isLoading && isError && <p>error</p>}
    </>
  );
};

export default PokemonList;
