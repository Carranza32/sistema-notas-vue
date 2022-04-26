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
              <p>Materia: {{ }} {{ student.group.name }}</p>
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
        <v-row>
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
        </v-row>
        <!--Barra de progreso-->
      </v-card-text>

    </v-card>
  </div>
</template>

<script>
import { mdiPencil, mdiDelete, mdiAccountOutline, mdiCurrencyUsd, mdiTrendingUp, mdiDotsVertical, mdiLabelOutline } from '@mdi/js'
import { getWithToken } from '@/helpers/ApiService'

export default {
  // Estadisticas

  setup() {
    const statisticsData = [
      {
        title1: 'Nota 1 (30%)',
        total1: '8.96',

        title2: 'Nota 2 (30%)',
        total2: '8.96',

        title3: 'Nota 3 (35%)',
        total3: '8.96',
      },
      {
        title1: 'Nota 1 (30%)',
        total1: '8.96',

        title2: 'Nota 2 (30%)',
        total2: '8.96',

        title3: 'Nota 3 (35%)',
        total3: '8.96',
      },
      {
        title1: 'Nota 1 (30%)',
        total1: '8.96',

        title2: 'Nota 2 (30%)',
        total2: '8.96',

        title3: 'Nota 3 (35%)',
        total3: '8.96',
      },
    ]
    const resolveStatisticsIconVariation = data => {
      if (data === 'Trimestre 1') return { icon: mdiTrendingUp, color: 'primary' }
      if (data === 'Trimestre 2') return { icon: mdiTrendingUp, color: 'primary' }
      if (data === 'Trimestre 3') return { icon: mdiTrendingUp, color: 'primary' }
      if (data === 'Promedio final') return { icon: mdiTrendingUp, color: 'primary' }

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
      _id: this.$route.params.id,
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
      scores: [],
      student: {},
      subject: {},
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
  created() {
    console.log(this.$route.params.id)
    this.getData()
  },

  methods: {
    async getData() {
      const response = await getWithToken('students/subjects/'+this._id)
      console.log(response)

      if (response.status) {
        this.scores = response.data.scores
        this.student = response.data.student
        this.subject = response.data.subject
      }

      console.log(this.student)
      console.log(this.scores)
      console.log(this.subject)

    },

  }
}
</script>
