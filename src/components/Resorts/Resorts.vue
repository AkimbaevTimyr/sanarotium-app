<script>
import Resort from "@/components/Resorts/Resort.vue";
import {defineAsyncComponent} from "vue";

export default {
  name: "Resorts",
  components: {
    Resort,
  },
  provide: {
    user: 'AMAN PIDOR'
  },
}
</script>

<template>
  <div class="resorts">
    <h2 class="resorts_title">
      Самые продаваемые курорты
    </h2>
    <div class="resorts_items">
      <Resort
          :title="'Чинар Отель 5* | Нафталан'"
          :link="'sanatorium/Чинар/1'"
          :price="'121 AZN'"
          :desc="'CHINAR HOTEL & SPA NAFTALAN, известный в советское время как Санаторий Чинар расположен на территории огромного парка из сосен и чинаров. В тенистых аллеях парка создана прекрасная комфортная обстановка для отдыха и лечения.'"
      >
        <template v-slot:img>
          <a class="img-container" href="sanatorium/Чинар/1">
            <img src="../../assets/sanatoriums/sanatorium-img.jpeg" class="resort_img" alt="resort"/>
          </a>
        </template>
      </Resort>
      <Resort
          :link="'sanatorium/GARABAG%20RESORT%20&%20SPA/4'"
          :title="'GARABAG RESORT & SPA 5* | Нафталан'"
          :price="'171 AZN'"
          :desc="'GARABAG RESORT & SPA расположился на прекрасной и ухоженной территории, в курортной местности Нафталан, сыскавшей всемирную славу благодаря уникальному месторождению нафталанового масла, известного более 600 лет своими лечебными свойствами.'"
      >
        <template v-slot:img>
          <a class="img-container" href="sanatorium/GARABAG%20RESORT%20&%20SPA/4">
            <img src="../../assets/sanatoriums/garabag.jpeg" class="resort_img" alt="resort"/>
          </a>
        </template>
      </Resort>
      <Resort
          :link="'sanatorium/НАФТАЛАН/2'"
          :title="'Санаторий НАФТАЛАН| Нафталан'"
          :price="'33 AZN'"
          :desc="'Санаторий Нафталан был открыт в мае 2005 года. Это первое частное лечебное учреждение, открытое на курорте Нафталан в Азербайджане. Функционирует и принимает на лечение всех желающих круглый год. '"
      >
        <template v-slot:img>
          <a class="img-container" href="sanatorium/НАФТАЛАН/2">
            <img src="../../assets/sanatoriums/naftalan.jpeg" class="resort_img" alt="resort"/>
          </a>
        </template>
      </Resort>
    </div>
    <div class="resorts_button">
      <router-link to="/sanatoriums">
        Все курорты
      </router-link>
    </div>
  </div>

</template>

<style scoped>
  .resorts {
    max-width: 1280px;
    width: 100%;
    margin-inline-start: auto;
    margin-inline-end: auto;
    align-items: center;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 50px;
  }

  .resorts_button {
    width: 400px;
    padding: 15px;
    background-color: #0C9EE4;
    color: white;
    font-family: roboto,Arial,sans-serif;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
  }

  .resorts_button:hover {
    transition: 0.5s;
    scale: 1.03;
  }

  .resort_img {
    min-width: 380px;
    width: 100%;
    height: 180px;
    border-radius: 5px;
  }

  .resorts_item_right_price span {
    color: #d56a69;
  }
  .resorts_title {
    font-size: 2.5em;
    font-family: roboto-light,Arial,sans-serif;
    font-weight: 300;
    margin-bottom: 40px;
  }

  .img-container {
    overflow: hidden;
    height: 100%;
  }

  .img-container img {
    transition: transform 0.3s ease
  }

  @media (max-width: 940px) {
    .resorts_items {
      padding: 30px;
    }
  }

  @media (max-width: 768px) {
    .resorts_title {
      font-size: 2.0em;
    }
  }
  
  @media (max-width: 560px) {

  }
  
  @media (max-width: 450px) {
    .resorts_items {
      padding: 35px 0px 35px 0px;
    }
    .resorts_button {
      width: 250px;
    }

    .resorts_title {
      font-size: 1.7em;
      text-align: center;
    }

  }
  

</style>