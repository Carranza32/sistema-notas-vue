<template>
  <v-card
    flat
    class="pa-3 mt-2"
  >
    <v-form class="multi-col-validation">
      <v-card-text class="pt-5">
        <v-row>
          <v-col cols="12">
            <v-textarea
              v-model="optionsLocal.bio"
              outlined
              rows="3"
              label="Biografia"
            ></v-textarea>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="optionsLocal.birthday"
              outlined
              dense
              label="Cumpleaños"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="optionsLocal.phone"
              outlined
              dense
              label="Contacto"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="optionsLocal.website"
              outlined
              dense
              label="Sitio Web"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-select
              v-model="optionsLocal.country"
              outlined
              dense
              label="Pais"
              :items="['USA','UK','AUSTRALIA','BRAZIL']"
            ></v-select>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-select
              v-model="optionsLocal.languages"
              outlined
              dense
              multiple
              chips
              small-chips
              label="Lenguajes"
              :items="['English','Spanish','French','German']"
            ></v-select>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <p class="text--primary mt-n3 mb-2">
              Genero
            </p>
            <v-radio-group
              v-model="optionsLocal.gender"
              row
              class="mt-0"
              hide-details
            >
              <v-radio
                value="male"
                label="Male"
              >
              </v-radio>
              <v-radio
                value="female"
                label="Female"
              >
              </v-radio>
              <v-radio
                value="other"
                label="Otros"
              >
              </v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-text>
        <v-btn
          color="primary"
          class="me-3 mt-3"
        >
          Guardar Cambios
        </v-btn>
        <v-btn
          outlined
          class="mt-3"
          color="secondary"
          type="reset"
          @click.prevent="resetForm"
        >
          Cancelar
        </v-btn>
      </v-card-text>
    </v-form>
  </v-card>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  props: {
    informationData: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const optionsLocal = ref(JSON.parse(JSON.stringify(props.informationData)))

    const resetForm = () => {
      optionsLocal.value = JSON.parse(JSON.stringify(props.informationData))
    }

    return { optionsLocal, resetForm }
  },
}
</script>
