<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import client from '@/common/axiosClient'

const jugador = ref({})
const route = useRoute()
const router = useRouter()

onMounted(async () => {
  let id = route.params.id
  await cargarJugador(id)
})

async function cargarJugador(id) {
  await client
    .get(`/player/${id}/get`)
    .then((data) => {
      console.log(data)
      jugador.value = data.data
    })
    .catch((e) => {
      console.log(e)
    })
}

async function actualizarJugador(id) {
  await client
    .put(`/player/${id}/update`, jugador.value)
    .then((data) => {
      if (data.status === 200) router.push('/jugador/list')
    })
    .catch((e) => {
      console.log(e)
    })
}
</script>

<template>
  <div class="container" v-if="jugador !== null">
    <div class="card shadow">
      <div class="card-body">
        <h3 class="card-title">Actualizar registro del jugador</h3>

        <table class="tabla">
          <tbody>
            <tr>
              <td>
                <label>ID</label>
              </td>

              <td>
                {{ jugador._id }}
              </td>
            </tr>

            <tr>
              <td>
                <label>Nombre del Jugador</label>
              </td>

              <td>
                <input type="text" class="form-control" v-model="jugador.name" />
              </td>
            </tr>

            <tr>
              <td>
                <label>País</label>
              </td>

              <td>
                <input type="text" class="form-control" v-model="jugador.country" />
              </td>
            </tr>

            <tr>
              <td>
                <label>Edad</label>
              </td>

              <td>
                <input type="number" class="form-control" v-model.number="jugador.age" />
              </td>
            </tr>

            <tr>
              <td>
                <label>Último equipo inglés</label>
              </td>

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
              <td>
                <label>Posición</label>
              </td>

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
              <td>
                <label>Peso (kg)</label>
              </td>

              <td>
                <input type="number" class="form-control" v-model.number="jugador.weightInKilos" />
              </td>
            </tr>

            <tr>
              <td>
                <label>Altura (cm)</label>
              </td>

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
                <button class="btn btn-actualizar" @click="actualizarJugador(jugador._id)">
                  Actualizar Jugador
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="loading" v-else>No fue posible cargar los registros</div>
</template>
