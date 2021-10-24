<template>
    <div id="image-homeBackground"></div>
    <main id="view-main" class="text-center">
        <div class="site-title-card">
            <h1 id="site-title"> Fae Bedwell </h1>
            <h2 id="site-subtitle"> Traditional & Digital Artist </h2>
        </div>

        <div class="spacer"></div>
    </main>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

    #view-main {
        background: transparent;
        overflow: hidden;
    }
    #image-homeBackground {
        position: fixed;
        background-image: url("../assets/images/background.png");
        opacity: 0.8;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 30%;
        background-attachment: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .site-title-card {
        background-color: #eaeaea77;
        display: inline-block;
        border-radius: 40px;
        padding: 1rem 4rem;
        margin-top: 3rem
    }

    #site-title {
        font-size: 9em;
        font-family: "Footlight MT Light";
    }

    @media only screen and (max-width: 600px) {
        #site-title {
            font-size: 6em;
        }
        #site-subtitle {
            font-size: 2rem;
        }
    }

    #site-subtitle {
        font-size: 3rem;
        font-family: "Footlight MT Light";
    }

    .spacer {
        height: 300px;
    }
</style>