<template>
  <div>
    <p class="text-2xl mb-6">Alumnos</p>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar alumno"
              single-line
              hide-details
              class="d-flex pa-2"
            ></v-text-field>
            <!-- Empieza el form diaglo -->
            <add-student></add-student>

            <!-- Termina -->
          </v-card-title>
          <v-data-table :headers="headers" :items="desserts" :items-per-page="10" :search="search" class="elevation-1">
            <template>
              <v-icon small class="mr-2"> mdi-pencil </v-icon>
              <v-icon small> mdi-delete </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AddStudent from '@/views/pages/admin/Students/AddStudent.vue'

export default {
  components: { AddStudent },
  setup() {},

  data() {
    return {
      headers: [
        {
          text: 'Apellidos',
          align: 'start',
          value: 'lastname',
        },
        { text: 'Nombre', value: 'name' },
        { text: 'Carnet', value: 'carnet' },
        { text: 'Grupo', value: 'group' },
        { text: 'e-mail', value: 'email' },
        { text: 'Telefono', value: 'number' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      desserts: [
        {
          lastname: 'Aguilar Melgar',
          name: 'Julio Isrrael',
          carnet: '2019AG000',
          group: 1,
          email: '2019AG000@sj.com',
          number: '7855-5598',
        },
        {
          lastname: 'Carranza rivas',
          name: 'Mario Ernesto',
          carnet: '2018CR001',
          group: 1,
          email: '2018CR001@sj.com',
          number: '5885-5566',
        },
        {
          lastname: 'Palacios Ayala',
          name: 'Diego Ernesto',
          carnet: '2019PA002',
          group: 1,
          email: '2019PA002@sj.com',
          number: '',
        },
      ],
    }

    // Barra de progreso
  },
}
</script>
