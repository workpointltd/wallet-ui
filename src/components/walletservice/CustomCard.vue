<script setup lang="ts">
import { toRef } from "vue";

const props = defineProps<{
  title: string;
  subTitle: string;
}>()

const title = toRef(props, "title")
const subTitle = toRef(props, "subTitle")

</script>

<template>
  <v-col class="h-100">
    <v-col class="bg-white border-none rounded-sm h-100">
     
        <v-col cols="12" class="d-flex flex-column"> 
          <v-row class="p-4"> 
            <v-col>
          <h1 class="text-h6 font-weight-regular">{{ title }}</h1>
          <h2 class="text-caption text-grey-darken-1 font-weight-regular">
            {{ subTitle }}
          </h2> 
          </v-col>
           <v-text-field
            :loading="loading"
            density="compact"
            variant="solo"
            label="Search"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            @click:append-inner="onClick"
            class="mt-2 no-shadow" 
            ></v-text-field> 
            </v-row>
          <slot></slot>

        
        </v-col>
    
    </v-col>
  </v-col>
</template>

<style scoped>
.no-shadow .v-input__control {
  box-shadow: none; /* Remove the default box shadow */
}
</style>
