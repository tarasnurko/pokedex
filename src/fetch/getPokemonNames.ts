import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon";

export interface GetPokemonNamesRes {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}

export interface GetPokemonNames {
  limit: number;
  offset: number;
}

export const getPokemonNames = async ({
  limit,
  offset,
}: GetPokemonNames): Promise<GetPokemonNamesRes> => {
  return await axios
    .get(`${url}?limit=${limit}&offset=${offset}`)
    .then((res) => res.data);
};
