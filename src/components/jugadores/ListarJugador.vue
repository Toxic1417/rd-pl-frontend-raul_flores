<script setup>
import { ref, onMounted } from 'vue'
import client from '@/common/axiosClient'
import { useRouter } from 'vue-router'

const jugadores = ref(null)
const router = useRouter()

onMounted(async () => {
  await obtenerJugadores()
})

async function obtenerJugadores() {
  await client.get('/players').then((data) => {
    jugadores.value = data.data
  })
}

async function eliminarJugador(id) {
  await client
    .delete(`/player/${id}/delete`)
    .then((data) => {
      console.log(data)
      obtenerJugadores()
    })
    .catch((e) => {
      console.log(e)
    })
}
</script>

<template>
  <div v-if="jugadores === null">Cargando registros...</div>

  <table v-else class="table table-striped table-bordered table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>País</th>
        <th>Edad</th>
        <th>Ultimo equipo ENG</th>
        <th>Retirado</th>
        <th>Posición</th>
        <th>FA Cup</th>
        <th>Peso</th>
        <th>Altura</th>
        <th>Acciones</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="j in jugadores" :key="j._id">
        <td>{{ j._id }}</td>
        <td>{{ j.name }}</td>
        <td>{{ j.country }}</td>
        <td>{{ j.age }}</td>
        <td>{{ j.lastEnglishTeam }}</td>
        <td>{{ j.isRetired ? 'Sí' : 'No' }}</td>
        <td>{{ j.position }}</td>
        <td>{{ j.isFACupWinner ? 'Sí' : 'No' }}</td>
        <td>{{ j.weightInKilos }}</td>
        <td>{{ j.heightInCentimeters }}</td>

        <td>
          <button class="btn btn-danger btn-sm me-2" @click="eliminarJugador(j._id)">
            Eliminar
          </button>

          <button
            class="btn btn-warning btn-sm"
            @click="
              () => {
                router.push(`/jugador/update/${j._id}`)
              }
            "
          >
            Actualizar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
