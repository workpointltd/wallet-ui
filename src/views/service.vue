<script setup lang="ts">
import FixedHeader from "../components/walletservice/FixedHeader.vue";
import {ref} from "vue";
import router from "../router";
import SharedAccounts from "../components/walletservice/wallets/SharedAccounts.vue"
import WalletSharing from "../components/walletservice/wallets/WalletSharing.vue"
import CustomCard from "../components/walletservice/CustomCard.vue"
import Shared from "../components/walletservice/sharedaccounts/SharedAccounts.vue"

const loading = ref(false);
const tab = ref(null);
const tabs = ref([
  "Wallets", "Shared Accounts"
]);
const submitContextData = () => {
  loading.value = true
}
</script>

<template>

<FixedHeader :title="'Wallet Service'" :subTitle="'Configure Your Wallet Details Here.'" >
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
        add account
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
            <CustomCard title="Shared Accounts" sub-title="A List Of Your Shared Accounts">
              <SharedAccounts  :loading="loading" @clear="loading = false" />
            </CustomCard>
          </v-col>

          <v-col
            cols="12"
            sm="6"
          >
            <CustomCard title="Contact Details" sub-title="Edit Your Contact Details Below.">
              <WalletSharing :loading="loading" @clear="loading = false" />
            </CustomCard>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid v-if="n == tabs[1]">
        
            <CustomCard title="Shared Accounts" sub-title="A List Of Shared Accounts">
            <WalletSharing :loading="loading" @clear="loading = false" />
            </CustomCard>
          
      </v-container>
    </v-window-item>
  </v-window>

</template>