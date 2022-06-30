<template>
  <div class="row">
    <CardPokemonResumed
      class="col-sm-4"
      v-for="pokemon in pokemon_list.results"
      :key="pokemon.name"
      :pokemon="pokemon"
      @click="show_detailed(pokemon)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardPokemonResumed from "./CardPokemonResumed.vue";
import { getAllPokemons } from "../services/pokemonAPI";
import {
  arrayAllPokemons,
  pokemonResumed,
} from "@/types/PokemonTypes.interface";

export default defineComponent({
  components: {
    CardPokemonResumed,
  },

  props: {
    show_detailed: Function,
  },

  data() {
    return {
      pokemon_list: Object() as arrayAllPokemons,
      limit: 10,
      offset: 0,
    };
  },

  methods: {
    async getPokemons() {
      const value: arrayAllPokemons = await getAllPokemons(
        this.limit,
        this.offset
      );

      value.results?.forEach((pokemon: pokemonResumed) => {
        this.pokemon_list.results?.push(pokemon);
      });

      this.pokemon_list.results = this.pokemon_list.results?.filter(function (
        elem,
        index,
        self
      ) {
        return index === self.indexOf(elem);
      });

      this.offset += 10;

      return value;
    },
    async handleScroll() {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        await this.getPokemons();
      }
    },
  },

  setup() {
    return {};
  },

  async mounted() {
    this.pokemon_list = { results: [] };
    await this.getPokemons();
    window.addEventListener("scroll", this.handleScroll);
  },

  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
});
</script>

<style scoped></style>
