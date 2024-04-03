<script>
import Header from "@/components/Header.vue";
import Feedback from "@/components/Feedback.vue";
import Footer from "@/components/Footer.vue";
import Description from "@/components/Sanatorium/Description.vue";
import Service from "@/components/Sanatorium/Service.vue";
import Gallery from "@/components/Sanatorium/Gallery.vue";
import Rooms from "@/components/Sanatorium/Rooms.vue";
import Reviews from "@/components/Sanatorium/Reviews.vue";
import {sanatoriums} from "@/data/sanatoriums.js";
import {rooms} from "@/data/rooms.js";

  export default {
    name: 'Sanatorium',
    components: {Reviews, Rooms, Gallery, Service, Description, Footer, Feedback, Header},
    data() {
      let selected_tab = 1;
      let gallery = false;
      return {
        selected_tab,
        gallery
      }
    },
    methods: {
      getImageUrl(name) {
        return new URL(`../assets/${name}`, import.meta.url).href
      }
    },
    setup() {
      return {sanatoriums, rooms}
    },
    computed: {
      id() {
        return this.$route.params.id
      },
      sanatorium() {
        return this.sanatoriums.find(el => el.id == this.id);
      },
      roomsItems() {
        return this.rooms.filter(el => el.id == this.id);
      }
    }
  }

</script>

<template>
    <Header />
    <div class="sanatorium">
      <div class="wrapper">
        <div>
        </div>
        <div class="sanatorium-header">
          <div class="sanatorium-name">
            <h1>Санаторий {{ sanatorium.name }}</h1>
<!--            <span class="sanatorium-name-address">Sadova 5, 360 01 Карловы Вары</span>-->
          </div>
          <div class="sanatorium-grades">
            <div class="sanatorium-grades-info">
              <span>Великолепно</span>
              <a class="reviews" href="#">Отзывы: 1394</a>
              <a href="#">Видео с санатория</a>
            </div>
          </div>
        </div>
        <div class="sanatorium-tabs">
          <div class="sanatorium-tabs-name" @click="selected_tab = 1" :class="{ active: selected_tab === 1}">
            Описание
          </div>
          <div class="sanatorium-tabs-name margin-inline-start"  @click="selected_tab = 2" :class="{ active: selected_tab === 2}">
            Отзывы
          </div>
          <div class="sanatorium-tabs-name margin-inline-start"  @click="selected_tab = 3" :class="{ active: selected_tab === 3}">
            Номера
          </div>
        </div>
        <div style="margin-bottom: 60px">
          <div class="sanatorium-tabs-item" v-if="selected_tab == 1">
            <Gallery :main-img="sanatorium.img"/>
            <Description :descList="sanatorium.descList"  :description="sanatorium.description" />
            <Rooms @show-price="selected_tab = 3; window.scrollTo(0,0);" :items="roomsItems"/>
            <Service />
          </div>
          <div class="sanatorium-tabs-item" v-if="selected_tab == 2">
            <Reviews />
          </div>
          <div class="sanatorium-tabs-item" v-if="selected_tab == 3">
            <div class="sanatorium-rooms-header">
              Доступные номера в Санаторие {{ sanatorium.name }}
            </div>
            <div class="sanatorium-rooms-items">
              <div class="sanatorium-rooms-item" v-for="room in roomsItems">
                <div>
                  <img :src="getImageUrl(room.img)" alt="room-img" />
                </div>
                <div class="sanatorium-rooms-item-info">
                  <div class="price">
                    от <span>{{ room.price }}</span> AZN за 7 дней
                  </div>
                  <p>
                    3-х разовое питание с лечением
                  </p>
                  <div class="sanatorium-rooms-item-info-button">
                    <a href="https://wa.me/77072152002" target="_blank"> Узнать цены </a>
                  </div>
                  <div class="sanatorium-rooms-item-info-button-info">
                    Можно бронировать без банковской карты
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Feedback />
      </div>
      <div style="margin-top: 60px">
        <Footer />
      </div>
    </div>
</template>

<style scoped>

.sanatorium-rooms-item-info-button-info {
  background: #EAFAE3;
  color: #48C014;
  font-size: 11px;
  padding: 15px;
  text-align: center;
  text-decoration: underline;
  height: 20px;
  display: flex;
  align-items: center;
}

.price {
  color: #B70000;
  font-size: 20px;
}

.room-img {
  border-radius: 5px;
}

.sanatorium-rooms-item-info-button {
  color: #FFFFFF;
  background: #0C9EE4;
  width: 250px;
  display: inline-block;
  padding: 7px 10px;
  border-radius: 3px;
  font-size: 22px;
  text-align: center;
  transition: ease all .2s;
  cursor: pointer;
  font-family: roboto,Arial,sans-serif;
}

.price span {
  font-size: 28px;
  line-height: 28px;
  font-family: roboto,Arial,sans-serif;
  font-weight: 400;
}

.sanatorium-rooms-header {
  margin: 30px 0px 30px 0px;
  padding: 0px 0px 20px 0px;
  font-size: 26px;
  border-bottom: 3px solid #EBECF1;
}

.sanatorium-rooms-item {
  border: 1px solid #EBECF1;
  width: 600px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.sanatorium-rooms-item:hover {
  border: 1px solid #333333;
}

.sanatorium-rooms-item-info {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.sanatorium-rooms-item-info p {
  color: #B70000;
}

.sanatorium-rooms-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.sanatorium-service-item-list li{
  display: flex;
  font-size: 15px;
  font-family: roboto,Arial,sans-serif;
}

.sanatorium-desc-list ul {
  font-size: .9em;
  color: #85929F;
}

.sanatorium-desc-list li {
  margin-bottom: 15px;
  display: flex;
}


.sanatorium-desc-list li p {
  margin-inline-start: 10px;
}

.sanatorium-desc-list ul span {
  padding-top: 3px;
}


.sanatorium-gallery-left img {
  min-width: 900px;
  min-height: 400px;
  width: 100%;
  height: 100%;
}

.sanatorium-tabs {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.active {
  background-color: #0C9EE4 !important;
  color: white;
}

.sanatorium-tabs-name {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  cursor: pointer;
  background-color: #F0F1F4;
  padding: 14px;
  border-radius: 3px;
  transition: background-color .1s ease;
  font-family: roboto-medium,Arial,sans-serif;
}

.margin-inline-start {
  margin-inline-start: 16px
}

.sanatorium {
  margin-top: 30px;
}

.sanatorium-name h1{
  font-size: 2.5em;
  font-weight: 300;
}
.sanatorium-header {
  display: flex;
  justify-content: space-between;
}

.reviews {
  color: #6B7382;
  font-size: 14px;
}

.sanatorium-grades {
  display: flex;
  justify-content: space-between;
  text-align: end;
}

.sanatorium-grades-info {
  display: flex;
  flex-direction: column;
}
.sanatorium-grades-info span {
  color: #48C014;
  font-size: 20px;
  line-height: 1;
}

@media (max-width: 1250px) {
  .sanatorium-header {
    padding: 0px 10px;
  }
}

@media (max-width: 1200px) {
  .sanatorium-rooms-items {
    justify-content: center;
  }
}

@media (max-width: 500px) {
  .sanatorium-header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .sanatorium-grades-info {
    text-align: center;
  }

  .sanatorium-name h1{
    font-size: 2em;
  }
  .sanatorium-rooms-item {
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
  }
  .sanatorium-rooms-header {
    display: block;
    text-align: center;
  }
}


</style>