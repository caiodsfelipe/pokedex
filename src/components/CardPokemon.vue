<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-5 img-card">
        <img
          :src="pokemon.sprites.other.home.front_default"
          class="img-fluid rounded-start p-3"
          alt="..."
        />
      </div>
      <div class="col-md-7 card-col-pokemon">
        <div class="card-body card-body-pokemon">
          <h1 id="pokemon-name" class="card-title card-title-pokemon m-2">
            {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}
            <span class="text-muted">Nº{{ pokemon.id }}</span>
          </h1>

          <div class="container-fluid border rounded my-4">
            <div class="row">
              <div class="card-header text-center">Características</div>
            </div>
            <div
              class="row text-center row-cols-1 row-cols-md-4 list-caracteristicas py-2"
            >
              <div class="col">
                <a class="list-group-item list-group-item-action">
                  <div class="w-100 justify-content-between">
                    <h6 class="mb-1">Peso</h6>
                  </div>
                  <small class="mb-1 text-muted">{{ pokemon.weight }}</small>
                </a>
              </div>
              <div class="col">
                <a class="list-group-item list-group-item-action">
                  <div class="w-100 justify-content-between">
                    <h6 class="mb-1">Altura</h6>
                  </div>
                  <small class="mb-1 text-muted">{{ pokemon.height }}</small>
                </a>
              </div>
              <div class="col">
                <a class="list-group-item list-group-item-action">
                  <div class="w-100 justify-content-between">
                    <h6 class="mb-1">Tipo</h6>
                  </div>
                  <p
                    class="card-text mb-1 text-muted"
                    v-for="type in pokemon.types"
                    :key="type.slot"
                  >
                    <small>{{ type.type.name }}</small>
                  </p>
                </a>
              </div>
              <div class="col">
                <a class="list-group-item list-group-item-action">
                  <div class="w-100 justify-content-between">
                    <h6 class="mb-1">Habilidades</h6>
                  </div>
                  <p
                    class="card-text mb-1 text-muted"
                    v-for="ability in pokemon.abilities"
                    :key="ability.name"
                  >
                    <small v-if="!ability.is_hidden">{{
                      ability.ability.name
                    }}</small>
                  </p>
                </a>
              </div>
            </div>
          </div>

          <StatsChart :stats="pokemon.stats" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Pokemon } from "@/types/PokemonTypes.interface";
import { defineComponent, PropType } from "vue";
import StatsChart from "./StatsChart.vue";

export default defineComponent({
  components: {
    StatsChart,
  },

  props: {
    pokemon: {
      type: Object as PropType<Pokemon>,
      required: true,
    },
  },
  
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
