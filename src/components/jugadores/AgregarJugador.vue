<script setup>
import { ref } from 'vue'
import { Jugador } from './jugadorSchema.js'
import { useRouter } from 'vue-router'
import client from '@/common/axiosClient.js'

const jugador = ref(Jugador)
const router = useRouter()

async function agregarJugador() {
  await client
    .post('/player', jugador.value)
    .then((data) => {
      if (data.status === 201) jugador.value.name = null
      jugador.value.country = null
      jugador.value.age = null
      jugador.value.lastEnglishTeam = null
      jugador.value.isRetired = null
      jugador.value.position = null
      jugador.value.isFACupWinner = null
      jugador.value.weightInKilos = null
      jugador.value.heightInCentimeters = null
      router.push('/jugador/list')
    })
    .catch((e) => {
      console.log(e)
    })
}
</script>

<template>
  <div class="container">
    <div class="card shadow">
      <div class="card-body">
        <h3 class="card-title">Agregar nuevo Jugador</h3>

        <table class="tabla">
          <tbody>
            <tr>
              <td><label>Nombre del Jugador</label></td>

              <td>
                <input type="text" class="form-control" v-model="jugador.name" />
              </td>
            </tr>

            <tr>
              <td><label>País</label></td>

              <td>
                <input type="text" class="form-control" v-model="jugador.country" />
              </td>
            </tr>

            <tr>
              <td><label>Edad</label></td>

              <td>
                <input type="number" class="form-control" v-model.number="jugador.age" />
              </td>
            </tr>

            <tr>
              <td><label>Último equipo inglés</label></td>

              <td>
                <input type="text" class="form-control" v-model="jugador.lastEnglishTeam" />
              </td>
            </tr>

            <tr>
              <td>
                <label>Retirado</label>
              </td>

              <td>
                <div class="radio-group">
                  <label>
                    <input type="radio" :value="true" v-model="jugador.isRetired" />

                    Sí
                  </label>

                  <label>
                    <input type="radio" :value="false" v-model="jugador.isRetired" />

                    No
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td><label>Posición</label></td>

              <td>
                <input type="text" class="form-control" v-model="jugador.position" />
              </td>
            </tr>

            <tr>
              <td>
                <label>Ganó FA Cup</label>
              </td>

              <td>
                <div class="radio-group">
                  <label>
                    <input type="radio" :value="true" v-model="jugador.isFACupWinner" />

                    Sí
                  </label>

                  <label>
                    <input type="radio" :value="false" v-model="jugador.isFACupWinner" />

                    No
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td><label>Peso (kg)</label></td>

              <td>
                <input type="number" class="form-control" v-model.number="jugador.weightInKilos" />
              </td>
            </tr>

            <tr>
              <td><label>Altura (cm)</label></td>

              <td>
                <input
                  type="number"
                  class="form-control"
                  v-model.number="jugador.heightInCentimeters"
                />
              </td>
            </tr>

            <tr>
              <td colspan="2">
                <button class="btn btn-primary mt-3" @click="agregarJugador">
                  Agregar Jugador
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
