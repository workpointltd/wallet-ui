<script setup lang="ts">
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

const initialState = {
  contactName: '',
  contactEmail: '',
  ccEmail: '',
  address: '',
  location: '',
}

const state = reactive({
  ...initialState,
})

const rules = {
  contactName: { required },
  contactEmail: { required, email },
  ccEmail: { required, email },
  address: { required },
  location: { required },
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
      Contact Name
      <span v-if="v$.contactName.required" class="text-red">*</span>
    </div>
    <v-text-field
        color="primary"
        v-model="state.contactName"
        :error-messages="v$.contactName.$errors.map(e => e.$message) as any"
        placeholder="Contact Name"
        required
        @input="v$.contactName.$touch"
        @blur="v$.contactName.$touch"
        variant="outlined"
        density="compact"
        hide-details="auto"
    ></v-text-field>

    <div class="text-subtitle-1 text-sm-caption font-weight-bold py-2">
      Contact Email
      <span v-if="v$.contactEmail.required" class="text-red">*</span>
    </div>
    <v-text-field
        color="primary"
        v-model="state.contactEmail"
        :error-messages="v$.contactEmail.$errors.map(e => e.$message) as any"
        placeholder="Contact Email"
        required
        @input="v$.contactEmail.$touch"
        @blur="v$.contactEmail.$touch"
        variant="outlined"
        density="compact"
        hide-details="auto"
    ></v-text-field>

    <div class="text-subtitle-1 text-sm-caption font-weight-bold py-2">
      CC Email
      <span v-if="v$.ccEmail.required" class="text-red">*</span>
    </div>
    <v-text-field
        color="primary"
        v-model="state.ccEmail"
        :error-messages="v$.ccEmail.$errors.map(e => e.$message) as any"
        placeholder="CC Email"
        required
        @input="v$.ccEmail.$touch"
        @blur="v$.ccEmail.$touch"
        variant="outlined"
        density="compact"
        hide-details="auto"
    ></v-text-field>

    <div class="text-subtitle-1 text-sm-caption font-weight-bold py-2">
      Address
      <span v-if="v$.address.required" class="text-red">*</span>
    </div>
    <v-text-field
        color="primary"
        v-model="state.address"
        :error-messages="v$.address.$errors.map(e => e.$message) as any"
        placeholder="Address"
        required
        @input="v$.address.$touch"
        @blur="v$.address.$touch"
        variant="outlined"
        density="compact"
        hide-details="auto"
    ></v-text-field>

    <div class="text-subtitle-1 text-sm-caption font-weight-bold py-2">
      Location
      <span v-if="v$.location.required" class="text-red">*</span>
    </div>
    <v-text-field
        color="primary"
        v-model="state.location"
        :error-messages="v$.location.$errors.map(e => e.$message) as any"
        placeholder="Location"
        required
        @input="v$.location.$touch"
        @blur="v$.location.$touch"
        variant="outlined"
        density="compact"
        hide-details="auto"
    ></v-text-field>
  </form>
</template>

<style scoped>

</style>