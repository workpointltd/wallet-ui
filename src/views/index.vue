<script setup lang="ts">
import FixedHeader from "../components/common/FixedHeader.vue";
import {ref} from "vue";
import CompanyDetailsForm from "../components/common/CompanyDetailsForm.vue";
import ContactDetailsForm from "../components/common/ContactDetailsForm.vue";
import MappedUSSDs from "../components/common/MappedUSSDs.vue";

const tab = ref(null)
const tabs = ref([
  "Account Details", "USSD Accounts"
])
</script>

<template>
  <FixedHeader :title="'About'" :subTitle="'Configure Your Account Details Here.'" >
    <template #buttons>
      <v-btn
          variant="outlined"
          color="none"
          class="text-none text-caption mx-2"
      >
        Go Back
      </v-btn>
      <v-btn
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
            <v-col class="h-100">
              <v-col class="bg-white border-none rounded-sm h-100">
                <v-col>
                  <h1 class="text-h6 font-weight-regular">Company Details</h1>
                  <h2 class="text-caption text-grey-darken-1 font-weight-regular">
                    Edit Your Company Details Below.
                  </h2>

                  <CompanyDetailsForm/>
                </v-col>
              </v-col>
            </v-col>
          </v-col>

          <v-col
            cols="12"
            sm="6"
          >
            <v-col class="h-100">
              <v-col class="bg-white border-none rounded-sm h-100">
                <v-col>
                  <h1 class="text-h6 font-weight-regular">Contact Details</h1>
                  <h2 class="text-caption text-grey-darken-1 font-weight-regular">
                    Edit Your Contact Details Below.
                  </h2>


                  <ContactDetailsForm/>
                </v-col>
              </v-col>
            </v-col>
          </v-col>

        </v-row>
      </v-container>

      <v-container fluid v-if="n == tabs[1]">
        <v-row no-gutters>
          <v-col
              cols="12"
              sm="6"
          >
            <v-col class="h-100">
              <v-col class="bg-white border-none rounded-sm h-100">
                <v-col>
                  <h1 class="text-h6 font-weight-regular">Mapped USSD</h1>
                  <h2 class="text-caption text-grey-darken-1 font-weight-regular">
                    A List Of Your Mapped USSD Codes
                  </h2>
                </v-col>

                <MappedUSSDs/>
              </v-col>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-window-item>
  </v-window>
</template>

<style scoped>

</style>
