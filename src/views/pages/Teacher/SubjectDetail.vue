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
              MATEMATICA 6TO GRADO
            </v-card-title>
            <v-card-subtitle class="text-xs pa-0">
              <p>DOCENTE: JOHN DOE</p>
              <p>HORARIO: LUN (6:45 AM - 8:25 AM), JUEV LUN (6:45 AM - 8:25 AM)</p>
              <p>ALUMNOS INSCRITOS: 3</p>
            </v-card-subtitle>
          </div>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        <v-card-title class="align-start">
          <span class="font-weight-semibold">Estadisticas de la materia</span>
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
        <!--Barra de progreso-->
      </v-card-text>

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
            <template v-slot:[`item.average`]="{ item }">
              <span>{{ Number((item.score1 + item.score2 + item.score3) / 3).toLocaleString('en-US', {maximumFractionDigits: 2}) }}</span>
            </template>

            <template>
              <v-icon small class="mr-2">
                {{ icons.mdiPencil }}
              </v-icon>
              <v-icon small>
                {{ icons.mdiDelete }}
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiPencil, mdiDelete, mdiAccountOutline, mdiCurrencyUsd, mdiTrendingUp, mdiDotsVertical, mdiLabelOutline } from '@mdi/js'

export default {
  // Estadisticas

  setup() {
    const statisticsData = [
      {
        title: 'Ciclo 1',
        total: '8.96',
      },
      {
        title: 'Ciclo 2',
        total: '8.96',
      },
      {
        title: 'Ciclo 3',
        total: '9.96',
      },
      {
        title: 'Pomedio de grupo',
        total: '8.96',
      },
    ]
    const resolveStatisticsIconVariation = data => {
      if (data === 'Ciclo 1') return { icon: mdiTrendingUp, color: 'primary' }
      if (data === 'Ciclo 2') return { icon: mdiTrendingUp, color: 'primary' }
      if (data === 'Ciclo 3') return { icon: mdiTrendingUp, color: 'primary' }
      if (data === 'Promedio de grupo') return { icon: mdiTrendingUp, color: 'primary' }

      // if (data === 'Customers') return { icon: mdiAccountOutline, color: 'success' }
      // if (data === 'Product') return { icon: mdiLabelOutline, color: 'warning' }
      // if (data === 'Revenue') return { icon: mdiCurrencyUsd, color: 'info' }

      return { icon: mdiAccountOutline, color: 'success' }
    }

    return {
      search: '',
      statisticsData,
      resolveStatisticsIconVariation,

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
    }
  },

  // Datos Tabla
  data() {
    return {
      headers: [
        {
          text: 'Apellidos',
          align: 'start',
          value: 'lastname',
        },
        { text: 'Nombre', value: 'name' },
        { text: 'Carnet', value: 'uid' },
        { text: 'Grupo', value: 'group' },
        { text: 'e-mail', value: 'email' },
        { text: 'Promedio 1', value: 'score1' },
        { text: 'Promedio 2', value: 'score2' },
        { text: 'Promedio 3', value: 'score3' },
        { text: 'Final', value: 'average' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      items: [
        {
          lastname: 'Aguilar Melgar',
          name: 'Julio Isrrael',
          uid: '2019AG000',
          group: 1,
          email: '2019AG000@sj.com',
          score1: 9,
          score2: 8.5,
          score3: 7,
          average: 0.0,
        },
        {
          lastname: 'Carranza Rivas',
          name: 'Mario Ernesto',
          uid: '2018CR001',
          group: 1,
          email: '2018CR001@sj.com',
          score1: 9.6,
          score2: 5,
          score3: 7,
          average: 0.0,
        },
        {
          lastname: 'Palacios Ayala',
          name: 'Diego Ernesto',
          uid: '2019PA002',
          group: 1,
          email: '2019PA002@sj.com',
          score1: 7,
          score2: 7.2,
          score3: 8.3,
          average: 0.0,
        },
      ],
    }

    // Barra de progreso
  },
}
</script>
