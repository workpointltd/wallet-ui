<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>