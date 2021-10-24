<template>
  <TheHeader />
  <router-view />
  <TheFooter />
</template>

<style>
  html, body {
    height: 100%;
    margin: 0;
  }
  #app {
    font-family: 'Noto Sans', sans-serif
  }
</style>

<script>
  import TheHeader from "./components/TheHeader";
  import TheFooter from "./components/TheFooter";
  export default {
    components: {
      TheFooter,
      TheHeader
    }
  }
</script>