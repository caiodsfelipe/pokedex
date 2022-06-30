export interface arrayPokemons {
  pokemons?: Pokemon[];
}

export interface Pokemon {
  id: number;
  name: string;
  order: number;
  stats: [];
  sprites: [];
  height: number;
  weight: number;
}

export interface pokemonResumed {
  name: string;
  url: string
}

export interface arrayAllPokemons {
  count?: number
  next?: string,
  previous?: string,
  results?: pokemonResumed[];
}
