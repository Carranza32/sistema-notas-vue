<template>
  <v-edit-dialog
    :return-value.sync="item"
    @save="save"
  >
    {{ item }}
    <template v-slot:input>
      <v-text-field
        v-model="item"
        label="Edit"
        single-line
      ></v-text-field>
    </template>
  </v-edit-dialog>
</template>

<script>
export default {
  props: {
    item: null
  },
  setup() {

  },
}
</script>
