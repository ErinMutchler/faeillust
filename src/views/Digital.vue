<template>
    <main class="container row justify-content-center m-auto mt-3">
        <IllustrationCard
                v-for="illustrationDoc in illustrationDocs"
                :key="illustrationDoc.id"
                :title="illustrationDoc.title"
                :url="illustrationDoc.url"
                :id="illustrationDoc.id"
                collectionID="digital"
                v-show="!isFetching"
        />
    </main>
</template>

<script>
  import IllustrationCard from "../components/IllustrationCard";
  import {firestoreManager, storageManager} from "../services/FirebaseConfig";

  export default {
    name: "Digital",
    components: {
      IllustrationCard
    },
    data() {
      return {
        illustrationDocs: [],
        isFetching: true,
      };
    },
    created() {
      firestoreManager.beginListening("digital", () => {
        this.illustrationDocs = firestoreManager.artworkDocs;
        let promises = [];
        for (let i = 0; i < this.illustrationDocs.length; ++i) {
          let p = storageManager.getFileURL(this.illustrationDocs[i].path).then(url => {
            this.illustrationDocs[i].url = url;
          }).catch((err) => console.log(err.message));
          promises.push(p);
        }
        Promise.allSettled(promises).then(() => {
          this.isFetching = false;
        });
      });
    }
  }
</script>

<style scoped>

</style>