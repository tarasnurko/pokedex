import axios from "axios";
import { PokemonData } from "@/data/PokemonData";

export const getPokemonPreview = async (url: string): Promise<PokemonData> => {
  return await axios.get(url).then((res) => res.data);
};
