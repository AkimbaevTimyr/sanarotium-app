<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import {sanatoriums} from "@/data/sanatoriums.js";
import Reviews from "@/components/Sanatorium/Reviews.vue";
import Feedback from "@/components/Feedback.vue";
import {getImageUrl} from "@/data/images.js";

export default {
  name: "Sanatoriums",
  components: {Feedback, Reviews, Footer, Header},
  setup() {
    return {sanatoriums}
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/sanatoriums/${name}`, import.meta.url).href
    }
  },
}
</script>

<template>
  <Header />
  <div class="sanatoriums">
    <div class="wrapper">
      <div class="sanatoriums-header">
        Санатории
      </div>
      <div class="sanatoriums-items">
        <div class="sanatoriums-item" v-for="item in sanatoriums">
          <div class="img-container">
            <img :src="getImageUrl(item.img)" alt="фото санатория"/>
          </div>
          <div class="name">
            Санаторий {{ item.name }}
          </div>
          <div class="sanatoriums-item-info">
            <div class="info">
              {{ item.info }}
            </div>
            <div style="display: flex; padding: 0 15px; margin-top: 20px; justify-content: space-between">
              <div class="price">
                от <em>{{ item.price }}</em> за сутки<br/>
                <strong>3-х разовое питание с лечением</strong>
              </div>
              <div class="reviews">
                <span>
                  Великолепно
                </span>
                <a href="#">
                  Отзывы: 1396
                </a>
              </div>
            </div>
          </div>
          <router-link :to="`/sanatorium/${item.name}/${item.id}`" class="overlay"></router-link>
        </div>
      </div>
    </div>
  </div>
  <Feedback />
  <div style="margin-top: 30px"></div>
  <Footer />
</template>

<style scoped>
.sanatoriums {
  margin: 30px 0px 30px 0px;
}

.sanatoriums-header {
  font-size: 2.5em;
  font-weight: 400;
  margin-bottom: 20px;
}

.sanatoriums-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.sanatoriums-item {
  max-width: 400px;
  max-height: 430px;
  height: 100%;
  width: 100%;
  border: 1px solid #D5D9E1;
  padding-bottom: 20px;
  cursor: pointer;
  margin: 0px 15px 20px 0px;
  position: relative;
}

.sanatoriums-item-info {
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  height: 47%;
  text-align: center;
}

.sanatoriums-item:hover {
  transition: 0.2s ease-in ease-in-out;
  border: 1px solid #a5abb2;
}

.img-container {
  max-height: 174px;
  height: 100%;
  overflow: hidden;
}

.img-container img {
  height: 100%;
  width: 100%;
  transition: transform 0.3s ease
}

.name {
  color: #0C9EE4;
  display: block;
  font-size: 1.2em;
  padding: 0 15px;
  margin-bottom: 6px;
  margin-top: 12px;
  font-family: roboto-bold,Arial,sans-serif;
  transition: .2s;
  text-align: center;
}

.info {
  font-size: .95em;
  padding: 0 15px;
}

.price {
  display: block;
  bottom: 18px;
  color: #B70000;
  font-size: 1.4em;
  line-height: .85em;
  text-align: start;
}

.price strong {
  font-size: .65em;
}

.price em {
  font-style: normal;
  font-family: roboto,Arial,sans-serif;
  font-weight: 400;
}

.reviews {
  display: flex;
  flex-direction: column;
}
.reviews span {
  color: #3DB912;
  font-size: 1.2em;
  line-height: 20px;
  text-align: end;
}

.reviews a {
  color: #0C9EE4;
  font-size: .75em;
  font-family: roboto,Arial,sans-serif;
  text-align: end;
}

.reviews a:hover {
  border-bottom: 1px solid #0C9EE4;
}

.overlay {
  display: block;
  width: 100%;
  height: 100%;
  z-index: 1;
  inset-inline-start: 0;
  top: 0;
  text-decoration: none!important;
  position: absolute;
}

.sanatoriums-item:hover .img-container img {
  transform: scale(1.1)
}

.sanatoriums-item:hover .name {
  color: black;
}

@media (max-width: 511px) {
  .sanatoriums-item {
    margin: 0px 0px 20px 0px;
  }

  .sanatoriums-header {
    text-align: center;
  }

}


</style>