<template>
  <div>
    <p class="text-2xl mb-6"></p>
    <!--MAteria-->
    <v-card>
      <v-img src="@/assets/images/pages/card-basic-person.png" height="250" class="white--text align-end" />
      <v-card-text class="position-relative">
        <v-avatar size="70" color="white" class="avatar-center" style="margin-top: -30px; border: 4px solid #fff; border-radius: 50px;">
          <v-img src="@/assets/images/avatars/1.png"></v-img>
        </v-avatar>
        <div class="d-flex justify-space-between flex-wrap pt-5">
          <div class="me-2 mb-2">
            <v-card-title class="pt-0 px-0">
              {{ group.name }}
            </v-card-title>
            <v-card-subtitle class="text-xs pa-0">
              <p>DOCENTE ENCARGADO: {{ group.teacher.name }}</p>
              <p>ALUMNOS INSCRITOS: {{ items.length }}</p>
            </v-card-subtitle>
          </div>
        </div>
      </v-card-text>

      <!-- <v-divider></v-divider> -->

      <!-- <v-card-text>
        <v-card-title class="align-start">
          <span class="font-weight-semibold">Estadisticas de grupo</span>
        </v-card-title>
        <v-row>
          <v-col v-for="data in statisticsData" :key="data.title" cols="6" md="3" class="d-flex align-center">
            <v-avatar size="44" :color="resolveStatisticsIconVariation(data.title).color" rounded class="elevation-1">
              <v-icon dark color="white" size="30">
                {{ resolveStatisticsIconVariation(data.title).icon }}
              </v-icon>
            </v-avatar>
            <div class="ms-3">
              <p class="text-xs mb-0">
                {{ data.title }}
              </p>
              <h3 class="text-xl font-weight-semibold">
                {{ data.total }}
              </h3>
            </div>
          </v-col>
        </v-row>
      </v-card-text> -->

    </v-card>
    <!--Tabla-->
    <v-row class="mt-5">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar alumno"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="items" :items-per-page="10" :search="search" class="elevation-1">
            <template v-slot:[`item.actions`]="{ item }">
              <router-link :to="{ name: 'teacher-subject-student', params: { id: item.id } }">
                <v-btn small text color="primary">Ver notas</v-btn>
              </router-link>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiPencil, mdiDelete, mdiAccountOutline, mdiCurrencyUsd, mdiTrendingUp, mdiDotsVertical, mdiLabelOutline } from '@mdi/js'
import { getWithToken } from '@/helpers/ApiService'

export default {
  // Datos Tabla
  data() {
    return {
      search: '',

      // icons
      icons: {
        mdiDotsVertical,
        mdiTrendingUp,
        mdiAccountOutline,
        mdiLabelOutline,
        mdiCurrencyUsd,
        mdiPencil,
        mdiDelete,
      },

      headers: [
        { text: 'Apellidos', value: 'last_name' },
        { text: 'Nombre', value: 'name' },

        // { text: 'Carnet', value: 'uid' },
        // { text: 'Grupo', value: 'group.name' },
        { text: 'e-mail', value: 'email' },
        { text: 'Dirección', value: 'address' },
        { text: 'Teléfono', value: 'phone' },
        // { text: 'Trimestre 3', value: 'average_period3' },
        // { text: 'Final', value: 'final_average' },

        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      items: [],
      group: null,
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      console.log(this.$route.params.id)
      const response = await getWithToken('groups/find/'+ this.$route.params.id)

      if (response.status) {
        this.items = response.data.students
        this.group = response.data
      	console.log(response.data)
      }

    },

  }
}
</script>
