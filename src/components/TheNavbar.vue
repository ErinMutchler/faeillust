<template>
    <nav class="navbar navbar-expand-lg w-100 d-flex justify-content-center">
        <NavbarToggler />
        <NavbarAltMarkup />
    </nav>
</template>

<script>
  import NavbarToggler from "./NavbarToggler";
  import NavbarAltMarkup from "./NavbarAltMarkup";
  export default {
    name: "TheNavbar",
    components: {
      NavbarAltMarkup,
      NavbarToggler
    }
  }
</script>

<style scoped>

</style>