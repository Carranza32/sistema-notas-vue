<template>
	<div>
		<p class="text-2xl mb-6">Materias</p>
		<v-card>
			<v-img src="@/assets/images/pages/card-basic-influencer.png"
						 height="250" />
			<v-card-title>
				MATEMATICA 6TO GRADO
			</v-card-title>
			<v-card-text>
				<p>DOCENTE: JOHN DOE</p>
				<p>HORARIO: LUN (6:45 AM - 8:25 AM), JUEV LUN (6:45 AM - 8:25 AM)</p>
				<p>ALUMNOS INSCRITOS: </p>
			</v-card-text>
		</v-card>
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
export default {
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
				{text: 'Acciones', value: 'actions', sortable: false },
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
