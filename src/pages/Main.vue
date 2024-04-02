<script>

import {defineComponent} from "vue";
import Resorts from "@/components/Resorts/Resorts.vue";
import Header from "@/components/Header.vue";
import Feedback from "@/components/Feedback.vue";
import Footer from "@/components/Footer.vue";
import Socials from "@/components/Socials.vue";
import Advantages from "@/components/Advantages.vue";
import Materials from "@/components/Materials.vue";

export default defineComponent({
  components: {Materials, Advantages, Socials, Footer, Feedback, Header, Resorts}
})
</script>

<template>
  <div>
    <Header />
    <Advantages />
    <Resorts />
    <Feedback />
    <Socials />
    <Materials />
    <Footer />
  </div>
</template>

<style scoped>

</style>