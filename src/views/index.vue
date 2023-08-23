<script setup lang="ts">
import FixedHeader from "../components/common/FixedHeader.vue";
import {ref} from "vue";
import router from "../router";
import CompanyDetailsForm from "../components/common/CompanyDetailsForm.vue";
import ContactDetailsForm from "../components/common/ContactDetailsForm.vue";
import MappedUSSDs from "../components/common/MappedUSSDs.vue";
import CustomCard from "../components/common/CustomCard.vue";

const loading = ref(false);
const tab = ref(null);
const tabs = ref([
  "Account Details", "USSD Accounts"
]);
const submitContextData = () => {
  loading.value = true
}
</script>

<template>
  <FixedHeader :title="'About'" :subTitle="'Configure Your Account Details Here.'" >
    <template #buttons>
      <v-btn
          @click="router.back()"
          variant="outlined"
          color="none"
          class="text-none text-caption mx-2"
      >
        Go Back
      </v-btn>
      <v-btn
          @click="submitContextData"
          :loading="loading"
          variant="flat"
          color="primary"
          class="text-none text-caption mx-2"
      >
        Update
      </v-btn>
    </template>
    <template #tabs>
      <v-tabs
          v-model="tab"
          color="primary"
          align-tabs="start"
          density="comfortable"
          class="px-3"
      >
        <v-tab v-for="t in tabs" :value="t" class="text-sm-caption">{{ t }}</v-tab>
      </v-tabs>
    </template>
  </FixedHeader>
  <v-window v-model="tab">
    <v-window-item
        v-for="n in tabs"
        :key="n"
        :value="n"
    >
      <v-container fluid v-if="n == tabs[0]">
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="6"
          >
            <CustomCard title="Company Details" sub-title="Edit Your Company Details Below.">
              <CompanyDetailsForm :loading="loading" @clear="loading = false" />
            </CustomCard>
          </v-col>

          <v-col
            cols="12"
            sm="6"
          >
            <CustomCard title="Contact Details" sub-title="Edit Your Contact Details Below.">
              <ContactDetailsForm :loading="loading" @clear="loading = false" />
            </CustomCard>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid v-if="n == tabs[1]">
        <v-row no-gutters>
          <v-col
              cols="12"
              sm="6"
          >
            <CustomCard title="Mapped USSD" sub-title="A List Of Your Mapped USSD Codes">
              <MappedUSSDs />
            </CustomCard>
          </v-col>
        </v-row>
      </v-container>
    </v-window-item>
  </v-window>
</template>

<style scoped>

</style>
