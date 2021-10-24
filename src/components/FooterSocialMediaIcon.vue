<template>
    <a class="align-self-center" :href="url">
        <img class="socialMediaIcon" :src="src" :alt="alt">
    </a>
</template>

<style scoped>
    .socialMediaIcon {
        width: 40px;
        margin: 0 14px;
    }
</style>

<script>
  export default {
    name: "FooterSocialMediaIcon",
    props: {
      url: {
        type: String,
        required: true,
      },
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      }
    }
  }
</script>