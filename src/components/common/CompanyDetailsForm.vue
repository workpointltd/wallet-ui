<script setup lang="ts">
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const initialState = {
  name: '',
  type: '',
  companyId: '',
  uniqueName: '',
}

const state = reactive({
  ...initialState,
})

const rules = {
  name: { required },
  type: { required },
  companyId: { required },
  uniqueName: { required },
}

const v$ = useVuelidate(rules, state, { $lazy: true, $autoDirty: true})

function clear () {
  v$.value.$reset()

  for (const [key, value] of Object.entries(initialState)) {
    state[key as keyof typeof initialState] = value
  }
}
</script>

<template>
  <form class="py-4">
    <div class="text-subtitle-1 text-sm-caption font-weight-bold py-2">
      Name
      <span v-if="v$.name.required" class="text-red">*</span>
    </div>
    <v-text-field
        color="primary"
        v-model="state.name"
        :error-messages="v$.name.$errors.map(e => e.$message) as any"
        placeholder="Name"
        required
        @input="v$.name?.$touch"
        @blur="v$.name?.$touch"
        variant="outlined"
        density="compact"
        hide-details="auto"
    ></v-text-field>

    <div class="text-subtitle-1 text-sm-caption font-weight-bold py-2">
      Type
      <span v-if="v$.type.required" class="text-red">*</span>
    </div>
    <v-text-field
        color="primary"
        v-model="state.type"
        :error-messages="v$.type.$errors.map(e => e.$message) as any"
        placeholder="Type"
        required
        @input="v$.type.$touch"
        @blur="v$.type.$touch"
        variant="outlined"
        density="compact"
        hide-details="auto"
    ></v-text-field>

    <div class="text-subtitle-1 text-sm-caption font-weight-bold py-2">
      Company ID
      <span v-if="v$.companyId.required" class="text-red">*</span>
    </div>
    <v-text-field
        color="primary"
        v-model="state.companyId"
        :error-messages="v$.companyId.$errors.map(e => e.$message) as any"
        placeholder="Company ID"
        required
        @input="v$.companyId.$touch"
        @blur="v$.companyId.$touch"
        variant="outlined"
        density="compact"
        hide-details="auto"
    ></v-text-field>

    <div class="text-subtitle-1 text-sm-caption font-weight-bold py-2">
      Unique Name
      <span v-if="v$.name.required" class="text-red">*</span>
    </div>
    <v-text-field
        color="primary"
        v-model="state.uniqueName"
        :error-messages="v$.uniqueName.$errors.map(e => e.$message) as any"
        placeholder="Unique Name"
        required
        @input="v$.uniqueName.$touch"
        @blur="v$.uniqueName.$touch"
        variant="outlined"
        density="compact"
        hide-details="auto"
    ></v-text-field>

<!--    <v-btn
        class="me-4"
        @click="v$.$validate"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>-->
  </form>
</template>

<style scoped>

</style>