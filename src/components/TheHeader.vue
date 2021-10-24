<template>
    <header id="theHeader" class="d-flex flex-column align-items-center">
        <img id="logo" src="../assets/logo.png">
        <TheNavbar />
    </header>
</template>

<style scoped>
    #theHeader {
        background-color: rgba(243, 243, 242, 0.9);
    }
    #logo {
        width: 120px;
        margin: 14px 0;
        border-radius: 50%;
    }
</style>

<script>
  import TheNavbar from "./TheNavbar";
  export default {
    name: "TheHeader",
    components: {
      TheNavbar
    }
  }
</script>