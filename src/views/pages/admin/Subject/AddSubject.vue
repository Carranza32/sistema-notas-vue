<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <div class="float-right">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"><v-icon left>{{ icons.mdiPlus }}</v-icon>Agregar nuevo</v-btn>
        </div>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Nueva materia</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <form v-on:submit.prevent="AddSubject()" >
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Nombre" required outlined v-model="item.name"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea label="Descripción" required auto-grow outlined rows="3" v-model="item.description"></v-textarea>
                </v-col>
              </v-row>
            </form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false" > Cerrar </v-btn>
          <v-btn color="primary" elevation="3" raised @click="AddSubject"> Guardar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { postWithToken } from '@/helpers/ApiService'
import Swal from 'sweetalert2';
import { mdiPlus } from '@mdi/js'

export default {
  props: {
    callback: {
      type: Function
    }
  },
  data: () => ({
    dialog: false,
    icons: {
      mdiPlus,
    },
    item: {
      name: '',
      description: '',
    }
  }),
  methods: {
    async AddSubject() {
      const response = await postWithToken('subjects', this.item);

      if (response.status) {
        this.dialog = false;
        Swal.fire({
          title: 'Materia agregada',
          icon: 'success'
        })
      }

      if (this.callback) {
        this.callback()
      }

      this.item = {
        name: '',
        description: '',
      }
    },
  },
}
</script>
