<template>
    <main class="container row justify-content-center m-auto mt-3">
        <AnimationCard
                v-for="illustrationDoc in illustrationDocs"
                :key="illustrationDoc.id"
                :title="illustrationDoc.title"
                :url="illustrationDoc.url"
                :id="illustrationDoc.id"
                collectionID="animations"
                v-show="!isFetching"
        />
    </main>

</template>

<script>
  import AnimationCard from "../components/AnimationCard";
  import {firestoreManager, storageManager} from "../services/FirebaseConfig";

  export default {
    name: "Animations",
    components: {
      AnimationCard
    },
    data() {
      return {
        illustrationDocs: [],
        isFetching: true,
      };
    },
    created() {
      firestoreManager.beginListening("animations", () => {
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