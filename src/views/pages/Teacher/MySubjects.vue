<template>
  <div>
    <p class="text-2xl mb-6">Mis Aulas</p>
    <v-row>
      <v-col lg="4" cols="12" v-for="item in items" :key="item.id">
        <v-card>
          <div class="d-flex flex-column-reverse">
            <div>
              <v-card-title class="align-start">
                <span class="font-weight-semibold">{{ item.name }}</span>
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
                  {{ item.students_count }} Estudiantes inscritos
                </span>
              </v-card-text>
              <v-card-actions class="dense">
                <v-btn text color="primary" dark @click="SubjectDetails(item)">
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
import { getWithToken } from '@/helpers/ApiService';
export default {
  setup() {},

  data() {
    return {
      mdiAccountSupervisor,
      mdiDotsVertical,
      items: []
    }
  },

  mounted(){
    this.getData();
  },

  methods: {
    async getData() {
      const response = await getWithToken('teachers/groups')

      if (response.status) {
        this.items = response.data
        console.log(response.data)
      }
    },

    SubjectDetails(item){
      this.$router.push({name: 'teacher-subject-details', params: { id: item.id } })
    }
  }
}
</script>
