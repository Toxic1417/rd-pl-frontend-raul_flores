<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Premier League Players</h1>

    <div class="d-flex gap-3 mb-4">
      <RouterLink to="/jugador/add" class="btn btn-primary"> Agregar Jugador </RouterLink>

      <RouterLink to="/jugador/list" class="btn btn-success"> Listar Jugadores </RouterLink>
    </div>

    <RouterView />
  </div>
</template>

<style scoped></style>
