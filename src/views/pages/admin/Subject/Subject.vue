<template>
  <div>
    <p class="text-2xl mb-6">Administrar Materias</p>
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
            <v-spacer></v-spacer>
            <add-subject :callback="getData"></add-subject>
          </v-card-title>

          <v-data-table :headers="headers" :items="items" :items-per-page="10" :search="search" class="elevation-1">
            <template v-slot:[`item.created_at`]="{ item }">
              <span>{{ new Date(item.created_at).toLocaleString() }}</span>
            </template>

            <template v-slot:[`item.updated_at`]="{ item }">
              <span>{{ new Date(item.updated_at).toLocaleString() }}</span>
            </template>

            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small class="mr-2" @click="showEditDialog(item)">{{ icons.mdiPencil }}</v-icon>
              <v-icon small @click="showDeleteDialog(item)">{{ icons.mdiDelete }}</v-icon>
            </template>
          </v-data-table>

          <v-dialog v-model="editDialog" persistent max-width="600px">
            <v-card>
              <v-card-title>
                <span class="text-h5">Nueva materia</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <form v-on:submit.prevent="updateItem()">
                    <v-row>
                      <v-col cols="12">
                        <v-text-field label="Nombre" required outlined v-model="editedItem.name"></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          label="Descripción"
                          required
                          auto-grow
                          outlined
                          rows="3"
                          v-model="editedItem.description"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </form>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="editDialog = false"> Cerrar </v-btn>
                <v-btn color="primary" elevation="3" raised @click="updateItem"> Actualizar </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="deleteDialog" max-width="500">
            <v-card>
              <v-card-title class="text-h5">¿Seguro deseas eliminar el registro?</v-card-title>

              <v-card-text>No podrás revertir los cambios</v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text @click="deleteDialog = false">
                  Cancelar
                </v-btn>

                <v-btn color="error" raised @click="deleteItem()">
                  Eliminar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getWithToken, putWithToken, deleteWithToken } from '@/helpers/ApiService'
import AddSubject from './AddSubject.vue'

import { mdiPencil, mdiDelete } from '@mdi/js'
import Swal from 'sweetalert2'

export default {
  components: { AddSubject },
  setup() {},

  data() {
    return {
      editDialog: false,
      deleteDialog: false,
      icons: {
        mdiPencil,
        mdiDelete,
      },
      search: '',
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Descripción', value: 'description' },
        { text: 'Creado', value: 'created_at' },
        { text: 'Editado', value: 'updated_at' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      items: [],
      editedItem: {
        id: -1,
        name: '',
        description: '',
      },
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      const response = await getWithToken('subjects')

      if (response.status) {
        this.items = response.data
      }

      console.log(response)
    },

    showEditDialog(item) {
      this.editedItem = item || {}

      this.editDialog = true
    },

    showDeleteDialog(item) {
      this.editedItem = item || {}

      this.deleteDialog = true
    },

    async updateItem() {
      const response = await putWithToken(`subjects/${this.editedItem.id}`, this.editedItem)

      if (response.status) {
        this.editDialog = false

        Swal.fire({
          title: 'Materia actualizada',
          icon: 'success',
        })

        this.getData()
      }
    },

    async deleteItem() {
      const response = await deleteWithToken(`subjects/${this.editedItem.id}`)

      if (response.status) {
        this.deleteDialog = false

        Swal.fire({
          title: 'Materia eliminada',
          icon: 'success',
        })

        this.getData()
      }
    },
  },
}
</script>
