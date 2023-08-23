<script setup lang="ts">
import {toRef} from "vue";

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
      <v-col>
        <h1 class="text-h6 font-weight-regular">{{ title }}</h1>
        <h2 class="text-caption text-grey-darken-1 font-weight-regular">
          {{ subTitle }}
        </h2>
        <slot></slot>
      </v-col>
    </v-col>
  </v-col>
</template>

<style scoped>

</style>