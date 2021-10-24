<template>
    <div class="collapse navbar-collapse justify-content-center" id="navbar-altMarkup">
        <div class="navbar-nav">
            <NavbarLink path="/" text="HOME" />
            <NavbarLink path="/artwork" text="ARTWORK" />
            <NavbarLink path="/about" text="ABOUT" />
            <NavbarLink path="/contact" text="CONTACT" />
        </div>
    </div>
</template>

<style scoped>

</style>

<script>
  import NavbarLink from "./NavbarLink";
  export default {
    name: "NavbarAltMarkup",
    components: {
      NavbarLink
    }
  }
</script>