<template>
    <main class="w-100 d-flex flex-column flex-xl-row">
        <ArtworkPoster text="Traditional" :src="TraditionalPoster" alt="Traditional Artwork" path="/artwork/traditional" />
        <ArtworkPoster text="Digital" :src="DigitalPoster" alt="Digital Artwork" path="/artwork/digital" />
<!--        <ArtworkPoster text="Comics" :src="ComicsPoster" alt="Comics" path="/artwork/comics" />-->
        <ArtworkPoster text="Animation" :src="AnimationsPoster" alt="Animations" path="/artwork/animations" />
    </main>
</template>

<script>
  import ArtworkPoster from "../components/ArtworkPoster";
  import TraditionalPoster from "../assets/images/traditional-poster.png";
  import DigitalPoster from "../assets/images/digital-poster.png";
  import ComicsPoster from "../assets/images/comics-poster.png";
  import AnimationsPoster from "../assets/images/animation-poster.png";

  export default {
    name: "Artwork",
    components: {
      ArtworkPoster
    },
    data() {
      return {
        TraditionalPoster: TraditionalPoster,
        DigitalPoster: DigitalPoster,
        ComicsPoster: ComicsPoster,
        AnimationsPoster: AnimationsPoster,
      }
    }
  }
</script>

<style scoped>

</style>