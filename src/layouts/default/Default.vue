<template>
<!--  <v-app>
    <default-bar />

    <v-main>

    </v-main>
  </v-app>-->

<!--  <v-app>-->

<!--  </v-app>-->

  <default-bar />

  <v-main>
    <slot></slot>
  </v-main>
</template>

<script lang="ts" setup>
import DefaultBar from "./AppBar.vue";
</script>
