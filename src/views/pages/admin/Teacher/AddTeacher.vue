<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> Agregar nuevo </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Nuevo docente</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Nombre" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Apellido" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Correo" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Dirección" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Telefono" type="number" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select :items="['Matematica', 'Lenguaje', 'Ciencia', 'Edu. Fisica']" label="Materia" required></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false" > Cerrar </v-btn>
          <v-btn color="blue darken-1" text @click="AddStudent"> Guardar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
  methods: {
    AddStudent() {

    },
  },
}
</script>
