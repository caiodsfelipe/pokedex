<template>
  <NavBar />

  <main class="mt-5 mx-3">
    <div class="center-all">
      <h1>Está procurando um Pokémon?</h1>
      <p>Podemos ajudá-lo!</p>

      <form class="mt-5" @submit.prevent="searchPokemon(searchText)">
        <div class="input-group mb-3">
          <input
            v-model="searchText"
            type="text"
            class="form-control"
            placeholder="Digite o nome ou Nº do Pokémon aqui..."
            aria-label="Digite o nome ou Nº do Pokémon aqui..."
            aria-describedby="button-addon2"
          />
          <button
            @click="searchPokemon(searchText)"
            class="btn btn-outline-secondary d-none d-md-block"
            type="button"
            id="button-addon2"
          >
            Vasculhar Pokédex
          </button>
        </div>
        <div class="d-grid gap-2">
          <button
            @click="searchPokemon(searchText)"
            class="btn btn-outline-secondary d-md-none d-lg-none btn-sm"
            type="button"
            id="button-addon2"
          >
            Vasculhar Pokédex
          </button>
        </div>
      </form>
    </div>

    <div v-if="data.id" class="container mt-4">
      <div class="row">
        <div class="col"></div>
        <div class="col-12 p-0">
          <div class="container center p-0">
            <CardPokemon :pokemon="data" />
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>

    <div v-else class="container mt-4">
      <p class="center text-secondary mb-5" v-if="error">
        Ops...não conseguimos encontrar seu pokémon na nossa Pokédex 😔
      </p>
      <AllPokemons :show_detailed="showDetailed" />
    </div>
  </main>
</template>

<script lang="ts">
import { reactive, ref, toRefs, defineComponent } from "vue";
import { getOnePokemon } from "./services/pokemonAPI";
import { Pokemon, pokemonResumed } from "./types/PokemonTypes.interface";
import CardPokemon from "./components/CardPokemon.vue";
import AllPokemons from "./components/AllPokemons.vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    CardPokemon,
    NavBar,
    AllPokemons,
  },

  data() {
    return {
      pokemon_for_detailed: Object() as pokemonResumed,
    };
  },

  methods: {
    showDetailed(pokemon: pokemonResumed) {
      this.pokemon_for_detailed = pokemon;
      this.searchPokemon(this.pokemon_for_detailed.name);
    },
  },

  setup() {
    let error = ref(false);
    let pokemon = reactive<{ data: Pokemon }>({
      data: {
        id: 0,
        name: "",
        order: 0,
        stats: [],
        sprites: [],
        height: 0,
        weight: 0,
      },
    });

    let searchText = ref("");

    const searchPokemon = async (search: string): Promise<void> => {
      const value: Pokemon = await getOnePokemon(search);
      if (!value) error.value = true;
      else {
        error.value = false;
      }
      pokemon.data = value;
    };

    return {
      searchPokemon,
      ...toRefs(pokemon),
      searchText,
      error,
    };
  },
});
</script>

<style></style>
