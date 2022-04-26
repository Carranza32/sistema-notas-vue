<template>
  <div>
    <p class="text-2xl mb-6">Materias inscritas</p>
    <v-row>
      <v-col lg="4" cols="12" v-for="subject in subjects" v-bind:key="subject.id">
        <v-card>
          <div class="d-flex flex-column-reverse">
            <div>
              <v-card-title class="align-start">
                <span class="font-weight-semibold">{{ subject.name }}</span>
                <v-spacer></v-spacer>
                <v-btn icon small class="me-n3 mt-n2">
                  <v-icon>
                    {{ mdiDotsVertical }}
                  </v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text class="d-flex align-center flex-wrap body-1">
                <span class="text-sm">
                  <v-avatar size="38" class="elevation-0">
                    <v-icon size="24" color="grey" class="rounded-0">
                      {{ mdiAccountSupervisor }}
                    </v-icon>
                  </v-avatar>
                  {{ subject.student_average }} Promedio acumulado
                </span>
              </v-card-text>
              <v-card-actions class="dense">
                <v-btn text color="primary" dark @click="SubjectDetails(subject)">
                  Ver detalles
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiAccountSupervisor, mdiDotsVertical } from '@mdi/js'
import { getWithToken } from '@/helpers/ApiService'
export default {
  setup() {
    return {
      mdiAccountSupervisor,
      mdiDotsVertical,
    }
  },
  data(){
    return {
      subjects: []
    }
  },
  created() {
    this.getData()
  },

  methods: {
    SubjectDetails(subject){
      this.$router.push({name: 'students-subjects-detail', params: { id: subject.id } })
    },

    async getData() {
      const response = await getWithToken('students/subjects')

      if (response.status) {
        this.subjects = response.data.subjects
      }

      console.log(localStorage.getItem('user'))

    },

  }
}
</script>
