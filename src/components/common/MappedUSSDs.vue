<script setup lang="ts">
import {computed, ref} from "vue";

const ussds = [
  {
    code: '*337*100#',
    status: 'Active',
    actions: [
      {
        name: "delete",
        icon: "mdi-close"
      }
    ],
  },
  {
    code: '*337*100#',
    status: 'Active',
    actions: [
      {
        name: "delete",
        icon: "mdi-close"
      }
    ],
  },
  {
    code: '*337*100#',
    status: 'Active',
    actions: [
      {
        name: "delete",
        icon: "mdi-close"
      }
    ],
  },
  {
    code: '*337*100#',
    status: 'Active',
    actions: [
      {
        name: "delete",
        icon: "mdi-close"
      }
    ],
  },
  {
    code: '*337*100#',
    status: 'Active',
    actions: [
      {
        name: "delete",
        icon: "mdi-close"
      }
    ],
  },
]

const itemsPerPage = ref(5)
const totalItems = ref(ussds.length)
const headers = ref([
  { title: 'Code', key: 'code', align: 'start', sortable: false },
  { title: 'Status', key: 'status', align: 'start', sortable: false },
  { title: 'Actions', key: 'actions', align: 'start', sortable: false },
])
const search = ref("")
const loading = ref(false)

const serverItems = computed(() => {
  return ussds
})
type optionsType = {
  page: number,
  itemsPerPage: number;
  sortBy: [];
  groupBy: [];
  search: string;
}
const loadItems = (options: optionsType) => {
  itemsPerPage.value = options.itemsPerPage
  loading.value = true

  setTimeout(() => {
    loading.value = false
  }, 1000)
}
</script>

<template>
  <v-data-table-server
      class="text-md-body-2"
      :itemsPerPage="itemsPerPage"
      :headers="headers"
      :items-length="totalItems"
      :items="serverItems"
      :loading="loading"
      :search="search"
      item-value="name"
      noDataText="No data available"
      loadingText="loading"
      :itemsPerPageText="'Show'"
      :pageText="'entries'"
      :firstIcon="false"
      :lastIcon="false"
      :showCurrentPage="true"
      :itemsPerPageOptions="[
          {
            title: '10',
            value: 10
          }
      ]"
      @update:options="loadItems"
  >
    <template v-slot:[`item.status`]="{ item }">
      <v-chip label color="success">
        {{ item.raw.status }}
      </v-chip>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-btn-group density="compact">
        <v-btn v-for="btn in item.raw.actions" :icon="btn.icon"  variant="outlined" density="compact" size="small" class="action-btn" color="error" />
      </v-btn-group>
    </template>
  </v-data-table-server>
</template>

<style scoped>

</style>