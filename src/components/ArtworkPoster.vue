<template>
    <div class="text-center">
        <div class="d-inline-block">
            <div class="container-artworkPoster">
                <img class="image-artworkPoster" :src="src" :alt="alt" />
                <div class="container-artworkPosterText">
                    <h2 class="text-artworkPoster"> {{ text }} </h2>
                </div>
                <router-link class="link-artworkPoster" :to="path"> </router-link>
            </div>
        </div>
    </div>


</template>

<style scoped>
    .container-artworkPoster {
        position: relative;
        overflow: hidden;
        margin: 0.6rem;
        background: #a4ceef;
    }

    .container-artworkPoster * {
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
    }

    .image-artworkPoster {
        max-width: 100%;
        opacity: 0.4;
    }

    .container-artworkPosterText {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .text-artworkPoster {
        background: rgba(255, 255, 255, 0.56);
        padding: .8rem .5rem;
        width: 50%;
        border-radius: 40px;
    }

    .container-artworkPoster:hover .image-artworkPoster {
        opacity: 1;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .container-artworkPoster:hover .text-artworkPoster {
        -webkit-transform: translateX(-500%);
        transform: translateX(-500%);
    }

    .link-artworkPoster {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        position: absolute;
        z-index: 1;
    }
</style>

<script>
  export default {
    name: "ArtworkPoster",
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true
      },
      path: {
        type: String,
        required: true
      },
    },
  }
</script>