import React, { useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import {
  getPokemonNames,
  GetPokemonNamesRes,
} from "../../fetch/getPokemonNames";
import PokemonPreview from "../PokemonPreview/PokemonPreview";
import PokemonListSkeleton from "./PokemonListSkeleton";

const PokemonList = () => {
  // const [page, setPage] = useState(0);
  // const { data, isLoading, isError } = useQuery<GetPokemonNamesRes>(
  //   ["pokemonNames", page],
  //   () => getPokemonNames({ limit: 12, offset: page * 12 })
  // );

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

  return (
    <>
      {isError && <p>Error</p>}
      {isLoading && <PokemonListSkeleton />}
      <div className="w-full flex flex-col items-center gap-8">
        {!isLoading && data && (
          <div className="w-full grid grid-cols-3 gap-4">
            {data.pages.map((page) =>
              page.results.map((item) => (
                <PokemonPreview url={item.url} key={item.name} />
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
