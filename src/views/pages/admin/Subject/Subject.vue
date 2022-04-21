<template>
  <div>
    <p class="text-2xl mb-6">Materias</p>
    <v-row>
      <v-col cols="12">
      <v-icon class="mr-2">mdi-domain</v-icon>
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar materia"
              single-line
              hide-details
              class="d-flex pa-2"
            ></v-text-field>
          </v-card-title>

          <v-data-table :headers="headers" :items="items" :items-per-page="10" :search="search" class="elevation-1">
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small class="mr-2" @click="showEditDialog(item)">{{ icons.mdiPencil }}</v-icon>
              <v-icon small>{{ icons.mdiDelete }}</v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getWithToken } from '@/helpers/ApiService'

import {
  mdiPencil,
  mdiDelete,
} from '@mdi/js'

export default {
  components: {  },
  setup() {},

  data() {
    return {
      icons: {
        mdiPencil,
        mdiDelete,
      },
      search: '',
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Descripción', value: 'description' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      items: [],
      editedItem: {}
    }
  },

  async mounted(){
    const response = await getWithToken('subjects');

    if (response.status) {
      this.items = response.data;
    }

    console.log(response)
  },

  methods: {
    showEditDialog(item) {
        this.editedItem = item||{}
    },
  }
}
</script>
