<script setup lang="ts">
import {reactive, watch, toRef, computed} from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

const emit = defineEmits(["clear"]);

const props = defineProps<{
  loading: boolean;
}>();

const loading = toRef(props, "loading");

const initialState = {
  name: '',
  type: 'SACCO',
  companyId: '',
  uniqueName: '',
};

const state = reactive({
  ...initialState,
});

const rules = {
  name: { required },
  type: { required },
  companyId: { required },
  uniqueName: { required },
};

const v$ = useVuelidate(rules, state, { $lazy: true, $autoDirty: true});

const organisationTypes = computed(() => {
  return [
    "SACCO",
    "MFI"
  ]
})

const clear = () => {
  v$.value.$reset()

  for (const [key, value] of Object.entries(initialState)) {
    state[key as keyof typeof initialState] = value
  }
};

watch(loading, async () => {
  if (loading.value) {
    v$.value.$touch();
    const result = await v$.value.$validate();
    if (result) {
      console.log("submit state", state);
      clear();
    } else {
      setTimeout(() => {
        emit("clear");
      }, 1000)
    }
  }
});
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
    <v-select
        color="primary"
        v-model="state.type"
        :error-messages="v$.type.$errors.map(e => e.$message) as any"
        placeholder="Type"
        required
        @input="v$.type.$touch"
        @blur="v$.type.$touch"
        :items="organisationTypes"
        variant="outlined"
        density="compact"
        hide-details="auto"
    ></v-select>

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
  </form>
</template>

<style scoped>

</style>