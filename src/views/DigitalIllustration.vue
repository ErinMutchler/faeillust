<template>
    <main class="container">
        <div v-if="!isFetching" class="mt-4 text-center">
            <h2 class="text-center my-3"> {{ title }} </h2>
            <img :src="url" :alt="title" class="w-50">
        </div>
    </main>
</template>

<script>
  import {firestoreManager, storageManager} from "../services/FirebaseConfig";

  export default {
    name: "DigitalIllustration",
    data() {
      return {
        title: String,
        url: String,
        isFetching: true,
      }
    },
    created() {
      const docID = this.$route.params.id;
      firestoreManager.getPortfolioDocByID(docID, "digital").then(data => {
        this.title = data.title;
        storageManager.getFileURL(data.path).then(url => {
          this.url = url;
          this.isFetching = false;
        });
      });
    }
  }
</script>

<style scoped>

</style>