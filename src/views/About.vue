<template>
    <main class="container mt-4">
        <section class="section-about d-flex flex-column">
            <img src="../assets/images/headshot.png" alt="Fae Bedwell" class="w-100 mb-3 align-self-center">
            <div class="m-auto">
                <p>
                    Fae Bedwell is a traditional and digital illustrator skilled in character design, backgrounds, and world
                    building. They have won awards from public art fairs and sold work to the local Pride Center Terre Haute.
                    Fae is adaptable to an array of different art styles.
                </p>
                <p>
                    Fae grew up in rural southeast Indiana and draws inspiration from the abundant forestry and wetlands often
                    undiscussed about the “flyover state.” Their other inspirations, such as Japanese storytelling and style,
                    queer culture, and American children animation, are often incorporated into their art as main elements.
                </p>
                <p>
                    Fae's hourly rate for commissions is based at $40/hour USD.  <br />
                    Rates are subject to change. Please inquire about specific rates for your commission by emailing Fae at faebillust@gmail.com.
                </p>
            </div>
        </section>
    </main>
</template>

<script>
  export default {
    name: "About",
  }
</script>

<style scoped>
    .section-about {
        width: 100%;
    }

    @media (min-width: 992px) {
        .section-about {
            width: 75%;
            margin: auto;
        }
    }
</style>