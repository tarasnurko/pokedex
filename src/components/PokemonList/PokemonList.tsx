import { PokemonTypes } from "@/data/PokemonTypes";
import React, { useState } from "react";
import { useInfiniteQuery } from "react-query";
import {
  getPokemonNames,
  GetPokemonNamesRes,
} from "../../fetch/getPokemonNames";
import PokemonPreview from "../PokemonPreview/PokemonPreview";
import PokemonListSkeleton from "./PokemonListSkeleton";

type ChosenType = PokemonTypes | "all";

const PokemonList = () => {
  const [filteredType, setFilteredType] = useState<ChosenType>("all");

  const {
    data,
    isLoading,
    isFetchingNextPage,
    isError,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<GetPokemonNamesRes>(
    "pokemonNames",
    ({ pageParam = 0 }) => getPokemonNames({ limit: 12, offset: pageParam }),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.next) return null;

        const nextPageUrl = new URL(lastPage.next);
        const offset = new URLSearchParams(nextPageUrl.search).get("offset");
        return offset;
      },
    }
  );

  const handleLoadMore = () => {
    fetchNextPage();
  };

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilteredType(event.target.value as ChosenType);
  };

  return (
    <>
      {isError && <p>Error</p>}
      {isLoading && <PokemonListSkeleton />}
      <div className="w-full flex flex-col items-center gap-8">
        <select
          className="px-4 py-2 rounded-lg"
          value={filteredType}
          onChange={handleFilter}
        >
          <option value="all">All Types</option>
          <option value="grass">Grass</option>
          <option value="poison">Poison</option>
          <option value="fire">Fire</option>
          <option value="electric">Electric</option>
          <option value="bug">Bug</option>
          <option value="dark">Dark</option>
          <option value="dragon">Dragon</option>
          <option value="fairy">Fairy</option>
          <option value="fighting">Fighting</option>
          <option value="ghost">ghost</option>
          <option value="flying">flying</option>
          <option value="ground">ground</option>
          <option value="ice">ice</option>
          <option value="normal">normal</option>
          <option value="psychic">psychic</option>
          <option value="rock">rock</option>
          <option value="steel">steel</option>
          <option value="water">water</option>
        </select>
        {!isLoading && data && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 ld:grid-cols-3 gap-4">
            {data.pages.map((page) =>
              page.results.map((item) => (
                <PokemonPreview
                  url={item.url}
                  key={item.name}
                  filteredType={filteredType}
                />
              ))
            )}
          </div>
        )}
        {isFetchingNextPage && <PokemonListSkeleton />}
        <button
          disabled={isError || isLoading || isFetchingNextPage || !hasNextPage}
          onClick={handleLoadMore}
          className="px-5 py-3 text-lg font-medium bg-green-500 text-slate-100 rounded-xl"
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default PokemonList;
