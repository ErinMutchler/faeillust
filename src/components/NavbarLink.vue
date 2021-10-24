<template>
    <router-link class="nav-item nav-link mx-4" :to="path"> {{ text }} </router-link>
</template>

<style scoped>
    .navbar-nav .nav-link {
        font-size: 1.6em;
        color: #9e9e9e;
    }

    .nav-link:hover {
        font-size: 1.6em;
        color: #454545;
    }
</style>

<script>
  export default {
    name: "NavbarLink",
    props: {
      text: {
        type: String,
        required: true
      },
      path: {
        type: String,
        required: true,
      },
    }
  }
</script>

