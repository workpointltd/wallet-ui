<script setup lang="ts">
import {computed, ref} from "vue";

const wallets = [
  {
    org: 'Ketepa',
    acname: 'Workpont',
    c2b: "244564",
    b2b: "454566",
    actions: [
      {
        name: "edit",
        icon: "mdi-pencil"
      },
      {
        name: "delete",
        icon: "mdi-close"
      }
    ]
  },
  {
    org: 'ABC Corp',
    acname: 'AccountOne',
    c2b: "123456",
    b2b: "654321",
    actions: [
      {
        name: "edit",
        icon: "mdi-pencil"
      },
      {
        name: "delete",
        icon: "mdi-close"
      }
    ]
  },
  {
    org: 'XYZ Inc',
    acname: 'AccountTwo',
    c2b: "789012",
    b2b: "210987",
    actions: [
      {
        name: "edit",
        icon: "mdi-pencil"
      },
      {
        name: "delete",
        icon: "mdi-close"
      }
    ]
  },
  {
    org: 'Sample Org',
    acname: 'Test Account',
    c2b: "987654",
    b2b: "456789",
    actions: [
      {
        name: "edit",
        icon: "mdi-pencil"
      },
      {
        name: "delete",
        icon: "mdi-close"
      }
    ]
  },
  {
    org: 'NewCo',
    acname: 'NewAccount',
    c2b: "567890",
    b2b: "678901",
    actions: [
      {
        name: "edit",
        icon: "mdi-pencil"
      },
      {
        name: "delete",
        icon: "mdi-close"
      }
    ]
  },
  {
    org: 'CompanyX',
    acname: 'AccountX',
    c2b: "135790",
    b2b: "579031",
    actions: [
      {
        name: "edit",
        icon: "mdi-pencil"
      },
      {
        name: "delete",
        icon: "mdi-close"
      }
    ]
  },
  {
    org: 'MegaCorp',
    acname: 'MegaAccount',
    c2b: "987123",
    b2b: "654987",
    actions: [
      {
        name: "edit",
        icon: "mdi-pencil"
      },
      {
        name: "delete",
        icon: "mdi-close"
      }
    ]
  },
  {
    org: 'InnovateTech',
    acname: 'InnovateAccount',
    c2b: "789456",
    b2b: "456123",
    actions: [
      {
        name: "edit",
        icon: "mdi-pencil"
      },
      {
        name: "delete",
        icon: "mdi-close"
      }
    ]
  }
];



const itemsPerPage = ref(5)
const totalItems = ref(wallets.length)
const headers = ref([
  { title: 'Org.Name', key: 'org', align: 'start', sortable: false },
  { title: 'A/C Name', key: 'acname', align: 'start', sortable: false },
  { title: 'C2B Shortcode', key: 'c2b', align: 'start', sortable: false },
  { title: 'B2C Shortcode', key: 'b2b', align: 'start', sortable: false },
  { title: 'Actions', key: 'actions', align: 'start', sortable: false },
]);

const search = ref("")
const loading = ref(false)

const serverItems = computed(() => {
  return wallets
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
    loadingText="Loading..."
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
    <!-- Display the org, acname, c2b, and b2b fields -->
    <template v-slot:[`item.org`]="{ item }">
      {{ item.raw.org }}
    </template>
    <template v-slot:[`item.acname`]="{ item }">
      {{ item.raw.acname }}
    </template>
    <template v-slot:[`item.c2b`]="{ item }">
      {{ item.raw.c2b }}
    </template>
    <template v-slot:[`item.b2b`]="{ item }">
      {{ item.raw.b2b }}
    </template>

    <!-- Customize the rendering of the actions column -->
    <template v-slot:[`item.actions`]="{ item }">
      
     <v-btn-group dense>
    <v-btn
      v-for="btn in item.raw.actions"
      :key="btn.name"
      :icon="true"
      :to="`#${btn.name}`"
      class="action-btn"
    >
      <v-icon
        :size="btn.name === 'delete' ? 'medium' : 'default'"
        :color="btn.name === 'delete' ? 'red' : 'green'"
      >
        {{ btn.icon }}
      </v-icon>
    </v-btn>
  </v-btn-group>

    </template>
  </v-data-table-server>
</template>


<style scoped>

</style>