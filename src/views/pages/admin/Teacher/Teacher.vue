<template>
  <div>
    <p class="text-2xl mb-6">Docentes</p>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar docente"
              single-line
              hide-details
              class="d-flex pa-2"
            ></v-text-field>
            <add-teacher></add-teacher>
          </v-card-title>

          <v-data-table :headers="headers" :items="names" :items-per-page="10" :search="search" class="elevation-1">
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
import AddTeacher from './AddTeacher.vue'

export default {
  components: { AddTeacher },
  setup() {},

  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Apellidos',
          align: 'start',
          value: 'lastname',
        },
        { text: 'Nombre', value: 'name' },
        { text: 'e-mail', value: 'email' },
        { text: 'Telefono', value: 'number' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      names: [
        {
          lastname: 'Aguilar Melgar',
          name: 'Julio Isrrael',
          email: '2019AG000@sj.com',
          number: '7855-5598',
        },
        {
          lastname: 'Carranza rivas',
          name: 'Mario Ernesto',
          email: '2018CR001@sj.com',
          number: '5885-5566',
        },
        {
          lastname: 'Palacios Ayala',
          name: 'Diego Ernesto',
          email: '2019PA002@sj.com',
          number: '5845-6969',
        },
      ],
    }

    // Barra de progreso
  },
}
</script>
