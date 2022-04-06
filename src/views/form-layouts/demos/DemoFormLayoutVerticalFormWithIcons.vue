<template>
  <v-form>
    <v-text-field
      v-model="firstname"
      :prepend-inner-icon="icons.mdiAccountOutline"
      label="Alumno"
      outlined
      dense
      placeholder="Alumno"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :prepend-inner-icon="icons.mdiEmailOutline"
      label="Email"
      type="email"
      outlined
      dense
      placeholder="Email"
    ></v-text-field>

    <v-text-field
      v-model="mobile"
      :prepend-inner-icon="icons.mdiCellphone"
      label="Telefono"
      outlined
      dense
      type="number"
      placeholder="Telefono"
    ></v-text-field>

    <v-text-field
      v-model="password"
      :prepend-inner-icon="icons.mdiLockOutline"
      label="Contraseña"
      outlined
      dense
      type="password"
      placeholder="Contraseña"
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      label="Recuerdame"
      class="mt-0"
    ></v-checkbox>

    <v-btn color="primary">
      Enviar
    </v-btn>
    <v-btn
      type="reset"
      outlined
      class="mx-2"
    >
      Limpiar
    </v-btn>
  </v-form>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiAccountOutline, mdiEmailOutline, mdiCellphone, mdiLockOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const firstname = ref('')
    const email = ref('')
    const mobile = ref()
    const password = ref()
    const checkbox = ref(false)

    return {
      firstname,
      email,
      mobile,
      password,
      checkbox,

      // icons
      icons: {
        mdiAccountOutline,
        mdiEmailOutline,
        mdiCellphone,
        mdiLockOutline,
      },
    }
  },
}
</script>
