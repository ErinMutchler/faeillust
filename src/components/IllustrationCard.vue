<template>
    <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
        <div class="img-thumbnail">
            <router-link :to="`/artwork/${collectionID}/illustration/${id}`">
                <div class="container-thumbnail">
                    <img
                            :src="url"
                            :alt="title"
                            :id="title.replace(/ /g, '-')"
                            class="w-100 image-illustration"
                            loading="lazy"
                    />
                </div>

            </router-link>
        </div>
        <div class="card-body">
            <h5 class="text-center">{{ title }}</h5>
        </div>
    </div>
    </div>
</template>

<style scoped>
    .container-thumbnail {
        width: 100%;
        aspect-ratio: 1 / 1;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img-thumbnail {
        -webkit-transition: all 200ms ease-in-out;
        transition: all 200ms ease-in-out;
    }

    .img-thumbnail:hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>

<script>
  export default {
    name: "IllustrationCard",
    props: {
      title: String,
      url: String,
      id: String,
      collectionID: String,
    },
  }
</script>