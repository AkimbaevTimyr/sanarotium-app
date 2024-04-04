<script>
import Header from "@/components/Header.vue";
import Reviews from "@/components/Reviews.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Reviews",
  components: {
    Footer,
    Header,
    ReviewsBlock: Reviews
  },
}
</script>

<template>
  <div>
    <Header />
    <ReviewsBlock />
    <Footer />
  </div>

</template>

<style scoped>

</style>