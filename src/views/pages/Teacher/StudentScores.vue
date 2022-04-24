<template>
  <div>
    <p class="text-2xl mb-6"></p>
    <v-card>
      <v-img src="@/assets/images/pages/card-basic-person.png" height="250" class="white--text align-end" />
      <v-card-text class="position-relative">
        <v-avatar
          size="70"
          color="white"
          class="avatar-center"
          style="margin-top: -30px; border: 4px solid #fff; border-radius: 50px;"
        >
          <v-img src="@/assets/images/avatars/1.png"></v-img>
        </v-avatar>
        <div class="d-flex justify-space-between flex-wrap pt-5">
          <div class="me-2 mb-2">
            <v-card-title class="pt-0 px-0">
              5TO GRADO A
            </v-card-title>
            <v-card-subtitle class="text-xs pa-0">
              <p>Mario Carranza Estudiante</p>
            </v-card-subtitle>
          </div>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        <v-card-title class="align-start">
          <span class="font-weight-semibold">Promedios de todas las materias</span>
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
            <template v-slot:[`item.avg1_score1`]="{ item }">
              <v-edit-dialog
                :return-value.sync="item.avg1_score1"
                @save="save"
              >
                {{ item.avg1_score1 }}
                <template v-slot:input>
                  <v-text-field
                    v-model="item.avg1_score1"
                    label="Edit"
                    type="number"
                    min="1"
                    max="10"
                    :rules="[minNumbers, maxNumbers, isNumber]"
                    single-line
                  ></v-text-field>
                </template>
              </v-edit-dialog>
            </template>
            <template v-slot:[`item.avg1_score2`]="{ item }">
              <v-edit-dialog
                :return-value.sync="item.avg1_score2"
                @save="save"
              >
                {{ item.avg1_score2 }}
                <template v-slot:input>
                  <v-text-field
                    v-model="item.avg1_score2"
                    label="Edit"
                    type="number"
                    min="1"
                    max="10"
                    :rules="[minNumbers, maxNumbers, isNumber]"
                    single-line
                  ></v-text-field>
                </template>
              </v-edit-dialog>
            </template>

            <template v-slot:[`item.avg1_score3`]="{ item }">
              <v-edit-dialog
                :return-value.sync="item.avg1_score3"
                @save="save"
              >
                {{ item.avg1_score3 }}
                <template v-slot:input>
                  <v-text-field
                    v-model="item.avg1_score3"
                    label="Edit"
                    type="number"
                    min="1"
                    max="10"
                    :rules="[minNumbers, maxNumbers, isNumber]"
                    single-line
                  ></v-text-field>
                </template>
              </v-edit-dialog>
            </template>

            <template v-slot:[`item.avg2_score1`]="{ item }">
              <v-edit-dialog
                :return-value.sync="item.avg2_score1"
                @save="save"
              >
                {{ item.avg2_score1 }}
                <template v-slot:input>
                  <v-text-field
                    v-model="item.avg2_score1"
                    label="Edit"
                    type="number"
                    min="1"
                    max="10"
                    :rules="[minNumbers, maxNumbers, isNumber]"
                    single-line
                  ></v-text-field>
                </template>
              </v-edit-dialog>
            </template>
            <template v-slot:[`item.avg2_score2`]="{ item }">
              <v-edit-dialog
                :return-value.sync="item.avg2_score2"
                @save="save"
              >
                {{ item.avg2_score2 }}
                <template v-slot:input>
                  <v-text-field
                    v-model="item.avg2_score2"
                    label="Edit"
                    type="number"
                    min="1"
                    max="10"
                    :rules="[minNumbers, maxNumbers, isNumber]"
                    single-line
                  ></v-text-field>
                </template>
              </v-edit-dialog>
            </template>
            <template v-slot:[`item.avg2_score3`]="{ item }">
              <v-edit-dialog
                :return-value.sync="item.avg2_score3"
                @save="save"
              >
                {{ item.avg2_score3 }}
                <template v-slot:input>
                  <v-text-field
                    v-model="item.avg2_score3"
                    label="Edit"
                    type="number"
                    min="1"
                    max="10"
                    :rules="[minNumbers, maxNumbers, isNumber]"
                    single-line
                  ></v-text-field>
                </template>
              </v-edit-dialog>
            </template>
            <template v-slot:[`item.avg3_score1`]="{ item }">
              <v-edit-dialog
                :return-value.sync="item.avg3_score1"
                @save="save"
              >
                {{ item.avg3_score1 }}
                <template v-slot:input>
                  <v-text-field
                    v-model="item.avg3_score1"
                    label="Edit"
                    type="number"
                    min="1"
                    max="10"
                    :rules="[minNumbers, maxNumbers, isNumber]"
                    single-line
                  ></v-text-field>
                </template>
              </v-edit-dialog>
            </template>
            <template v-slot:[`item.avg3_score2`]="{ item }">
              <v-edit-dialog
                :return-value.sync="item.avg3_score2"
                @save="save"
              >
                {{ item.avg3_score2 }}
                <template v-slot:input>
                  <v-text-field
                    v-model="item.avg3_score2"
                    label="Edit"
                    type="number"
                    min="1"
                    max="10"
                    :rules="[minNumbers, maxNumbers, isNumber]"
                    single-line
                  ></v-text-field>
                </template>
              </v-edit-dialog>
            </template>
            <template v-slot:[`item.avg3_score3`]="{ item }">
              <v-edit-dialog
                :return-value.sync="item.avg3_score3"
                @save="save"
              >
                {{ item.avg3_score3 }}
                <template v-slot:input>
                  <v-text-field
                    v-model="item.avg3_score3"
                    label="Edit"
                    type="number"
                    min="1"
                    max="10"
                    :rules="[minNumbers, maxNumbers, isNumber]"
                    single-line
                  ></v-text-field>
                </template>
              </v-edit-dialog>
            </template>

            <template v-slot:[`item.average1`]="{ item }">
              <v-toolbar color="#B39DDB" elevation="0">{{ item.average1 }}</v-toolbar>
            </template>
            <template v-slot:[`item.average2`]="{ item }">
              <v-toolbar color="#B39DDB" elevation="0">{{ item.average2 }}</v-toolbar>
            </template>
            <template v-slot:[`item.average3`]="{ item }">
              <v-toolbar color="#B39DDB" elevation="0">{{ item.average3 }}</v-toolbar>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {
  mdiPencil,
  mdiDelete,
  mdiAccountOutline,
  mdiCurrencyUsd,
  mdiTrendingUp,
  mdiDotsVertical,
  mdiLabelOutline,
} from '@mdi/js'

export default {
  // Estadisticas

  setup() {
    const statisticsData = [
      {
        title: 'Trimestre 1',
        total: '8.96',
      },
      {
        title: 'Trimestre 2',
        total: '8.96',
      },
      {
        title: 'Trimestre 3',
        total: '9.96',
      },
      {
        title: 'Pomedio global',
        total: '8.96',
      },
    ]
    const resolveStatisticsIconVariation = data => {
      if (data === 'Trimestre 1') return { icon: mdiTrendingUp, color: 'primary' }
      if (data === 'Trimestre 2') return { icon: mdiTrendingUp, color: 'primary' }
      if (data === 'Trimestre 3') return { icon: mdiTrendingUp, color: 'primary' }
      if (data === 'Promedio global') return { icon: mdiTrendingUp, color: 'primary' }

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
      minNumbers: v => v >= 1 || 'No puede ser 0',
      maxNumbers: v => v <= 10 || 'No puede ser mayor a 10',
      isNumber: v => !isNaN(v) || 'is not a number',
      headers: [
        { text: 'Materia', value: 'subject' },
        { text: 'Actividad 1 30%', value: 'avg1_score1' },
        { text: 'Actividad 2 30%', value: 'avg1_score2' },
        { text: 'Actividad 3 35%', value: 'avg1_score3' },
        { text: 'Trimestre 1', value: 'average1' },

        { text: 'Actividad 1 30%', value: 'avg2_score1' },
        { text: 'Actividad 2 30%', value: 'avg2_score2' },
        { text: 'Actividad 3 35%', value: 'avg2_score3' },
        { text: 'Trimestre 2', value: 'average2' },

        { text: 'Actividad 1 30%', value: 'avg2_score1' },
        { text: 'Actividad 2 30%', value: 'avg3_score2' },
        { text: 'Actividad 3 35%', value: 'avg3_score3' },
        { text: 'Trimestre 3', value: 'average3' },
      ],
      items: [
        {
          subject: 'Matemática',
          avg1_score1: 8.5,
          avg1_score2: 8.5,
          avg1_score3: 8.5,
          average1: 0,

          avg2_score1: 8.5,
          avg2_score2: 8.5,
          avg2_score3: 8.5,
          average2: 0,

          avg3_score1: 8.5,
          avg3_score2: 8.5,
          avg3_score3: 8.5,
          average3: 0,
        },
        {
          subject: 'Sociales',
          avg1_score1: 8.5,
          avg1_score2: 8.5,
          avg1_score3: 8.5,
          average1: 0,

          avg2_score1: 8.5,
          avg2_score2: 8.5,
          avg2_score3: 8.5,
          average2: 0,

          avg3_score1: 8.5,
          avg3_score2: 8.5,
          avg3_score3: 8.5,
          average3: 0,
        },
        {
          subject: 'Lenguaje',
          avg1_score1: 8.5,
          avg1_score2: 8.5,
          avg1_score3: 8.5,
          average1: 0,

          avg2_score1: 8.5,
          avg2_score2: 8.5,
          avg2_score3: 8.5,
          average2: 0,

          avg3_score1: 8.5,
          avg3_score2: 8.5,
          avg3_score3: 8.5,
          average3: 0,
        },
      ],
    }

    // Barra de progreso
  },
  methods: {
    save () {
      alert('Guardado')
    },
  }
}
</script>
