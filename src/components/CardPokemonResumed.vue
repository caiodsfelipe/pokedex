<template>
  <div v-if="pokemon_data.id" class="card card-resumed mb-3">
    <div class="img-card-resumido">
      <img
        :src="pokemon_data.sprites.other.home.front_default"
        class="img-fluid rounded-start p-3"
        alt="..."
      />
    </div>
    <div class="card-col-pokemon">
      <div class="card-body card-body-pokemon">
        <p class="small mb-0">Nº{{ pokemon_data.id }}</p>
        <h2 class="card-title card-title-pokemon">
          {{
            pokemon_data.name.charAt(0).toUpperCase() +
            pokemon_data.name.slice(1)
          }}
        </h2>
        <div class="tipo">
          <p
            class="card-text m-2"
            v-for="type in pokemon_data.types"
            :key="type.slot"
          >
            <small class="text-muted">{{ type.type.name }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { getOnePokemon } from "../services/pokemonAPI";
import { Pokemon } from "../types/PokemonTypes.interface";

export default defineComponent({
  props: {
    pokemon: {
      type: Object as PropType<Pokemon>,
      required: true,
    },
  },

  data() {
    return {
      pokemon_data: Object() as Pokemon,
    };
  },

  setup() {
    return {};
  },

  async created() {
    const value: Pokemon = await getOnePokemon(this.pokemon.name);
    this.pokemon_data = value;
  },
});
</script>

<style scoped></style>
