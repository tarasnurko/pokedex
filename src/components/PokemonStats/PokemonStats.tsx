import React from "react";
import { ChosenPokemon } from "src/context/PokemonContext";

interface PokemonStatsProps {
  pokemon: ChosenPokemon;
}

const TableRow = ({
  children,
  border,
}: {
  children: React.ReactNode;
  border?: boolean;
}) => (
  <div
    className={`py-2 w-full flex border-b ${
      border ? "border-b border-gray-400" : ""
    }`}
  >
    {children}
  </div>
);

const TableElement = ({ text }: { text: string | number }) => (
  <p className="px-1 flex-1 flex justify-center">{text}</p>
);

const PokemonStats: React.FC<PokemonStatsProps> = ({ pokemon }) => {
  const getPokemonName = (): string => {
    const normalizePokemonId = (num: number): string => {
      return num < 10 ? `#00${num}` : num < 100 ? `#0${num}` : `#${num}`;
    };

    return `${
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    } ${normalizePokemonId(pokemon.id)}`;
  };

  return (
    <div className="p-4 w-[300px] min-h-[400px] flex flex-col gap-4 items-center bg-slate-100 rounded-xl drop-shadow-md cursor-pointer border border-gray-400">
      <img
        src={pokemon.sprites.front_default || pokemon.sprites.front_shiny}
        alt={pokemon.name}
        className="w-48 h-48 object-cover"
      />
      <h2 className="text-2xl font-bold">{getPokemonName()}</h2>
      <div className="w-full flex flex-col border border-gray-400 rounded-md">
        <TableRow border>
          <TableElement text="Type" />
          <TableElement text={pokemon.type.join(", ")} />
        </TableRow>
        <TableRow border>
          <TableElement text="Attack" />
          <TableElement text={pokemon.attack} />
        </TableRow>
        <TableRow border>
          <TableElement text="Defense" />
          <TableElement text={pokemon.defense} />
        </TableRow>
        <TableRow border>
          <TableElement text="HP" />
          <TableElement text={pokemon.hp} />
        </TableRow>
        <TableRow border>
          <TableElement text="SP Attack" />
          <TableElement text={pokemon.spAttack} />
        </TableRow>
        <TableRow border>
          <TableElement text="SP Defense" />
          <TableElement text={pokemon.spDefense} />
        </TableRow>
        <TableRow border>
          <TableElement text="Speed" />
          <TableElement text={pokemon.speed} />
        </TableRow>
        <TableRow border>
          <TableElement text="Weight" />
          <TableElement text={pokemon.weight} />
        </TableRow>
        <TableRow>
          <TableElement text="Total moves" />
          <TableElement text={pokemon.totalMoves} />
        </TableRow>
      </div>
    </div>
  );
};

export default PokemonStats;
