<template>
    <main class="container row justify-content-center m-auto mt-3">
        <ComicCard
                v-for="illustrationDoc in illustrationDocs"
                :key="illustrationDoc.id"
                :title="illustrationDoc.title"
                :url="illustrationDoc.url"
                :id="illustrationDoc.id"
                collectionID="comics"
                v-show="!isFetching"
        />
    </main>

</template>

<script>
  import ComicCard from "../components/ComicCard";
  import {firestoreManager, storageManager} from "../services/FirebaseConfig";

  export default {
    name: "Comics",
    components: {
      ComicCard
    },
    data() {
      return {
        illustrationDocs: [],
        isFetching: true,
      };
    },
    created() {
      firestoreManager.beginListening("comics", () => {
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