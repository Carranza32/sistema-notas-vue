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
              {{ student.name }} {{ student.last_name }}
            </v-card-title>
            <v-card-subtitle class="pa-0">
              <p>Materia: {{ subject.name }} {{ student.group.name }}</p>
              <p>DOCENTE: {{ student.group.teacher.name }}</p>
            </v-card-subtitle>
          </div>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        <v-card-title class="align-start">
          <span class="font-weight-semibold">Estadisticas de la materia</span>
        </v-card-title>
        <!-- <v-row>
          <v-col v-for="data in scores" v-bind:key="data.id" cols="12" md="12">
            <v-row>
              <v-col cols="12" lg="3" class="ms-3 d-flex align-center">
                <v-avatar size="44" color="success" rounded class="elevation-1">
                  <v-icon dark color="white" size="30">
                    {{ icons.mdiTrendingUp }}
                  </v-icon>
                </v-avatar>
                <div class="ms-3">
                  <p class="text-xs mb-0">
                    Nota 1 (30%)
                  </p>
                  <h3 class="text-xl font-weight-semibold">
                    {{ data.period1_score1 }}
                  </h3>
                </div>
              </v-col>
              <v-col cols="12" lg="3" class="ms-3 d-flex align-center">
                <v-avatar size="44" color="success" rounded class="elevation-1">
                  <v-icon dark color="white" size="30">
                    {{ icons.mdiTrendingUp }}
                  </v-icon>
                </v-avatar>
                <div class="ms-3">
                  <p class="text-xs mb-0">
                    Nota 2 (30%)
                  </p>
                  <h3 class="text-xl font-weight-semibold">
                    {{ data.period1_score2 }}
                  </h3>
                </div>
              </v-col>
              <v-col cols="12" lg="3" class="ms-3 d-flex align-center">
                <v-avatar size="44" color="success" rounded class="elevation-1">
                  <v-icon dark color="white" size="30">
                    {{ icons.mdiTrendingUp }}
                  </v-icon>
                </v-avatar>
                <div class="ms-3">
                  <p class="text-xs mb-0">
                    Nota 3 (35%)
                  </p>
                  <h3 class="text-xl font-weight-semibold">
                    {{ data.period1_score3 }}
                  </h3>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row> -->

        <v-data-table :headers="headers" :items="items" :items-per-page="10" :search="search" class="elevation-1">
        </v-data-table>
        <!--Barra de progreso-->
      </v-card-text>

    </v-card>
  </div>
</template>

<script>
import { mdiPencil, mdiDelete, mdiAccountOutline, mdiCurrencyUsd, mdiTrendingUp, mdiDotsVertical, mdiLabelOutline } from '@mdi/js'
import { getWithToken } from '@/helpers/ApiService'

export default {
  setup() {},

  // Datos Tabla
  data() {
    return {
      search: '',

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
        { text: 'Actividad 1 30%', value: 'period1_score1' },
        { text: 'Actividad 2 30%', value: 'period1_score2' },
        { text: 'Actividad 3 35%', value: 'period1_score3' },
        { text: 'Trimestre 1', value: 'average_period1' },

        { text: 'Actividad 1 30%', value: 'period2_score1' },
        { text: 'Actividad 2 30%', value: 'period2_score2' },
        { text: 'Actividad 3 35%', value: 'period2_score3' },
        { text: 'Trimestre 2', value: 'average_period2' },

        { text: 'Actividad 1 30%', value: 'period3_score1' },
        { text: 'Actividad 2 30%', value: 'period3_score2' },
        { text: 'Actividad 3 35%', value: 'period3_score3' },
        { text: 'Trimestre 3', value: 'average_period3' },
      ],

      scores: [],
      student: {},
      subject: {},
      subject: [],
      items: [],
    }

    // Barra de progreso
  },
  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      const response = await getWithToken('students/subjects/'+this.$route.params.id)

      if (response.status) {
        this.items = response.data.scores
        this.student = response.data.student
        this.subject = response.data.subject
      	console.log(response.data)
      }

    },

  }
}
</script>
