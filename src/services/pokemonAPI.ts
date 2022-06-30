import { arrayAllPokemons } from "./../types/PokemonTypes.interface";
import { Pokemon } from "../types/PokemonTypes.interface";

export const getOnePokemon = async (pokemon: string): Promise<Pokemon> =>
  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
    .then((val) => val.json())
    .catch(() => {
      return false;
    });

export const getAllPokemons = async (
  limit: number,
  offset: number
): Promise<arrayAllPokemons> =>
  await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  )
    .then((val) => val.json())
    .catch(() => {
      return false;
    });
