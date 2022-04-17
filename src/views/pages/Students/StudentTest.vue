<template>
  <v-data-table :headers="headers" :items="lastname" sort-by="lastname"  :search="search" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Alumnos</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-text-field
          v-model="search"
          append-icon= "mdi-magnify"
          label="Buscar alumno"
          single-line
          hide-details
          class="d-flex pa-2"
        ></v-text-field>

        <!-- Empíeza el edit -->
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on"> Agregar nuevo </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Nuevo Alumno</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field label="Nombre" required v-model="editedItem.name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field label="Apellido" required v-model="editedItem.lastname"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Correo" type="email" v-model="editedItem.email" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Dirección" v-model="editedItem.address" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field label="Telefono" type="number" v-model="editedItem.number" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field label="Carnet" v-model="editedItem.carnet" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select
                        :items="['A', 'B', 'C', 'D']"
                        label="Grupo"
                        v-model="editedItem.group"
                        required
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select
                        :items="['1', '2', '3', '4']"
                        label="Grado"
                        v-model="editedItem.grade"
                        required
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close"> Cerrar </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Guardar </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
        <!-- Termina el edit -->

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">¿Estas seguro de eliminar este alumno?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"> Cancelar </v-btn>
              <v-btn color="primary" text @click="deleteItemConfirm"> Si, eliminar </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> {{ icons.mdiPencil }} </v-icon>
      <v-icon small @click="deleteItem(item)"> {{ icons.mdiDelete }} </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { mdiPencil, mdiDelete } from '@mdi/js'
import axios from 'axios'

export default {
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Apellidos',
        align: 'start',
        value: 'lastname',
      },
      { text: 'Nombre', value: 'name' },
      { text: 'Carnet', value: 'carnet' },
      { text: 'Dirección', value: 'address' },
      { text: 'Correo', value: 'email' },
      { text: 'Telefono', value: 'number' },
      { text: 'Grado', value: 'grade' },
      { text: 'Grupo', value: 'group' },
      { text: 'Acciones', value: 'actions', sortable: false },
    ],
    lastname: [],
    editedIndex: -1,
    editedItem: {
      lastname: '',
      name: '',
      carnet: 0,
      address: '',
      group: 0,
      email: '',
      number: 0,
      grade: 0,
    },
    defaultItem: {
      lastname: '',
      name: '',
      carnet: 0,
      address: '',
      group: 0,
      email: '',
      number: 0,
      grade: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
   async initialize() {

      //Pruebas para hacer la API
      //  const res =  await axios.get('https://notas-unicaes-api.herokuapp.com/api/students', {


      // })
      //  console.log(res.data);

      this.lastname = [
        {
          lastname: 'Aguilar',
          name: 'Julio',
          carnet: '2019TT601',
          address: 'santa ana',
          group: 'A',
          email: 'example@gmail.com',
          number: 77885544,
          grade: 1,
        },
        {
          lastname: 'Palacios',
          name: 'Diego',
          carnet: '2019TT601',
          address: 'santa ana',
          group: 'A',
          email: 'example@gmail.com',
          number: 77885544,
          grade: 1,
        },
        {
          lastname: 'Mario',
          name: 'Carranza',
          carnet: '2019TT601',
          address: 'santa ana',
          group: 'A',
          email: 'example@gmail.com',
          number: 77885544,
          grade: 1,
        },
        {
          lastname: 'Juarez',
          name: 'Marco',
          carnet: '2019TT601',
          address: 'santa ana',
          group: 'A',
          email: 'example@gmail.com',
          number: 77885544,
          grade: 1,
        },
        {
          lastname: 'Braghiroli',
          name: 'Miguel',
          carnet: '2019TT601',
          address: 'santa ana',
          group: 'A',
          email: 'example@gmail.com',
          number: 77885544,
          grade: 1,
        },
      ]
    },

    editItem(item) {
      this.editedIndex = this.lastname.indexOf(item)
      this.editedItem = { ...item }
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.lastname.indexOf(item)
      this.editedItem = { ...item }
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.lastname.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem }
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem }
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.lastname[this.editedIndex], this.editedItem)
      } else {
        this.lastname.push(this.editedItem)
      }
      this.close()
    },
  },
  setup() {
    return {
      icons: {
        mdiPencil,
        mdiDelete,
      },
    }
  },
}
</script>
