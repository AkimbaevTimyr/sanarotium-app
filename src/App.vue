<script >
import {defineComponent} from "vue";
import Header from "@/components/Header.vue";
import Advantages from "@/components/Advantages.vue";
import Resorts from "@/components/Resorts/Resorts.vue";
import Feedback from "@/components/Feedback.vue";
import Socials from "@/components/Socials.vue";
import Materials from "@/components/Materials.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: {Footer, Materials, Socials, Feedback, Resorts, Advantages, Header}
})
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>




</style>
