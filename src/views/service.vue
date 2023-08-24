<template>
  <FixedHeader :title="'Wallet Service'" :subTitle="'Configure Your Wallet Details Here.'">
    <template #buttons>
      <v-btn @click="router.back()" variant="outlined" color="none" class="text-none text-caption mx-2">
        Go Back
      </v-btn>
      <v-btn @click="toggleOverlay" :loading="loading" variant="flat" color="primary" class="text-none text-caption mx-2">
        {{ tab === 'Wallets' ? '+ New Wallet' : '+ Add Account' }}
      </v-btn>
    </template>
    <template #tabs>
      <v-tabs v-model="tab" color="primary" align-tabs="start" density="comfortable" class="px-3">
        <v-tab v-for="t in tabs" :key="t" :value="t" class="text-sm-caption">{{ t }}</v-tab>
      </v-tabs>
    </template>
  </FixedHeader>

  <v-window v-model="tab">
    <v-window-item v-for="t in tabs" :key="t" :value="t">
      <v-container fluid v-if="t === 'Wallets'">
        <v-row no-gutters>
          <v-col cols="12" sm="6">
            <CustomCard title="Shared Accounts" sub-title="A List Of Your Shared Accounts">
              <SharedAccounts :loading="loading" @clear="loading = false" />
            </CustomCard>
          </v-col>
          <v-col cols="12" sm="6">
            <CustomCard title="Contact Details" sub-title="Edit Your Contact Details Below.">
              <WalletSharing :loading="loading" @clear="loading = false" />
            </CustomCard>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid v-else-if="t === 'Shared Accounts'">
        <CustomCard title="Shared Accounts" sub-title="A List Of Shared Accounts">
          <Shared :loading="loading" @clear="loading = false" />
        </CustomCard>
      </v-container>
    </v-window-item>
  </v-window>

  <v-overlay v-model="overlay" contained class="align-center justify-center">
<v-card class="mx-auto" width="500">
       <v-card-title>New Shared Account</v-card-title>
      <v-card-subtitle>Share Your Wallet With Another ccount.</v-card-subtitle>
      <v-card-text>
        <v-form @submit.prevent="createSharedAccount">
          <div class="text-subtitle-1 text-sm-caption font-weight-bold py-2">
      Tenant ID
    </div>
          <v-text-field
           color="primary" 
           variant="outlined"
           density="compact"
           hide-details="auto"
         
            required
            placeholder="Enter Tenant ID eg t10007"
           ></v-text-field>
              <div class="text-subtitle-1 text-sm-caption font-weight-bold py-2">
      Name Of Account
    </div>
          <v-text-field
           color="primary" 
           variant="outlined"
           density="compact"
           hide-details="auto"
          
            required
            placeholder="Enter Name Of Account eg Maisha Mabati"
           ></v-text-field>
                 <div class="text-subtitle-1 text-sm-caption font-weight-bold py-2">
      Keycloak Of Admin
    </div>
          <v-text-field
           color="primary" 
           variant="outlined"
           density="compact"
           hide-details="auto"
          
            required
            placeholder="Enter Keycloak Of Admin"
           ></v-text-field>
                 <div class="text-subtitle-1 text-sm-caption font-weight-bold py-2">
     Name Of Admin
    </div>
          <v-text-field
           color="primary" 
           variant="outlined"
           density="compact"
           hide-details="auto"
           
            required
            placeholder="Enter Name Of Admin"
           >
           </v-text-field>

          
       <v-card-actions class="d-flex justify-center">
  <v-btn type="submit" class="bg-primary" block>Associate</v-btn>
</v-card-actions>

        </v-form>
      </v-card-text>
    </v-card>
  </v-overlay>
</template>

<script setup lang="ts">
import FixedHeader from "../components/walletservice/FixedHeader.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import SharedAccounts from "../components/walletservice/wallets/SharedAccounts.vue";
import WalletSharing from "../components/walletservice/wallets/WalletSharing.vue";
import CustomCard from "../components/walletservice/CustomCard.vue";
import Shared from "../components/walletservice/sharedaccounts/SharedAccounts.vue";

const router = useRouter();
const loading = ref(false);
const tab = ref("Wallets");
const tabs = ref(["Wallets", "Shared Accounts"]);
const overlay = ref(false);

const toggleOverlay = () => {
  overlay.value = !overlay.value;
};

const submitContextData = () => {
  loading.value = true;
};

const isModalVisible = ref(false);

const openModal = () => {
  console.log("Opening modal...");
  isModalVisible.value = true;
};
</script>
