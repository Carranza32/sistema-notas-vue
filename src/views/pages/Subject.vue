<template>
	<div>
		<p class="text-2xl mb-6">Materias</p>
		<!--MAteria-->
		<v-card>
			<v-img src="@/assets/images/pages/card-basic-influencer.png" height="250" />
			<v-card-title>
				MATEMATICA 6TO GRADO
			</v-card-title>
			<v-card-text>
				<p>DOCENTE: JOHN DOE</p>
				<p>HORARIO: LUN (6:45 AM - 8:25 AM), JUEV LUN (6:45 AM - 8:25 AM)</p>
				<p>ALUMNOS INSCRITOS: 3</p>
			</v-card-text>
		</v-card>
		<!--Estadisticas-->
		<v-card>
			<v-card-title class="align-start">
				<span class="font-weight-semibold">Estadisticas de la materia</span>
			</v-card-title>
			<v-spacer></v-spacer>
			<v-card-text>
				<v-row>
					<v-col v-for="data in statisticsData"
								 :key="data.title"
								 cols="6"
								 md="3"
								 class="d-flex align-center">
						<v-avatar size="44"
											:color="resolveStatisticsIconVariation (data.title).color"
											rounded
											class="elevation-1">
							<v-icon dark
											color="white"
											size="30">
								{{ resolveStatisticsIconVariation (data.title).icon }}
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
			</v-card-text>
		</v-card>
		<!--Tabla-->
		<v-row>
			<v-col cols="12">
				<v-card>
					<v-card-title>
						<v-text-field v-model="search"
													append-icon="mdi-magnify"
													label="Buscar alumno"
													single-line
													hide-details></v-text-field>
					</v-card-title>
					<v-data-table :headers="headers" :items="desserts" :items-per-page="10" :search="search" class="elevation-1">
						<template>
							<v-icon small class="mr-2">
								mdi-pencil
							</v-icon>
							<v-icon small>
								mdi-delete
							</v-icon>
						</template>
					</v-data-table>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
     import { mdiAccountOutline, mdiCurrencyUsd, mdiTrendingUp, mdiDotsVertical, mdiLabelOutline } from '@mdi/js'

  export default {
    //Estadisticas
    setup() {
    const statisticsData = [
      {
        title: 'Sales',
        total: '245k',
      },
      {
        title: 'Customers',
        total: '12.5k',
      },
      {
        title: 'Product',
        total: '1.54k',
      },
      {
        title: 'Revenue',
        total: '$88k',
      },
    ]

    const resolveStatisticsIconVariation = data => {
      if (data === 'Sales') return { icon: mdiTrendingUp, color: 'primary' }
      if (data === 'Customers') return { icon: mdiAccountOutline, color: 'success' }
      if (data === 'Product') return { icon: mdiLabelOutline, color: 'warning' }
      if (data === 'Revenue') return { icon: mdiCurrencyUsd, color: 'info' }

      return { icon: mdiAccountOutline, color: 'success' }
    }

    return {
      statisticsData,
      resolveStatisticsIconVariation,

      // icons
      icons: {
        mdiDotsVertical,
        mdiTrendingUp,
        mdiAccountOutline,
        mdiLabelOutline,
        mdiCurrencyUsd,
      },
    }
  },

  //Datos Tabla
  data() {
    return {
      headers: [
        {
          text: 'Apellidos',
          align: 'start',
          value: 'name',
        },
        { text: 'Nombre', value: 'calories' },
        { text: 'Carnet', value: 'fat' },
        { text: 'Grupo', value: 'carbs' },
        { text: 'e-mail', value: 'protein' },
        { text: 'Promedio 1', value: 'iron' },
        { text: 'Promedio 2', value: 'iron' },
        { text: 'Promedio 3', value: 'iron' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      desserts: [
        {
          name: 'Aguilar Melgar',
          calories: 'Julio Isrrael',
          fat: '2019AG000',
          carbs: 1,
          protein: '2019AG000@sj.com',
          iron: 8.5,
        },
        {
          name: 'Carranza Rivas',
          calories: 'Mario Ernesto',
          fat: '2018CR001',
          carbs: 1,
          protein: '2018CR001@sj.com',
          iron: 9.7,
        },
        {
          name: 'Palacios Ayala',
          calories: 'Diego Ernesto',
          fat: '2019PA002',
          carbs: 1,
          protein: '2019PA002@sj.com',
          iron: 8.7,
        },
      ],
    }
  },
}
</script>

