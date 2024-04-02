<script >
export default {
  name: "Resort",
  data() {

  },
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: true
    }
  },
  inject: ['user']
}
</script>

<template>
  <div class="resorts_item">
    <div class="resorts_item_left">
      <slot name="img">

      </slot>
    </div>
    <div class="resorts_item_right">
      <div class="resorts_item_right_title">
        <a class="link" :href="link">
          {{ title }}
        </a>
      </div>
      <div class="resorts_item_right_price">
        Цена от {{ price }} <span>за 1 ночь 3-х разовое питание с лечением</span>
      </div>
      <div class="resorts_item_right_desc">
        {{ desc }}
      </div>
    </div>
  </div>
</template>

<style scoped>

.resorts_item_left {
  height: 180px;
  min-width: 380px;
}

.resorts_item_left{
  margin-right: 30px;
}

.resorts_item_right_title{
  color: #16A2E5;
  margin: 0 0 16px 0;
  font-size: 1.5625em;
  font-family: roboto-medium,Arial,sans-serif;
  font-weight: bold;
}

.resorts_item_right_price{
  color: #B70000;
  font-size: 15px;
  line-height: 1em;
  font-family: roboto-medium,Arial,sans-serif;
  margin-bottom: 15px;
}

.resorts_item_right_price span {
  color: #d56a69;
}

.resorts_item_right_desc{
  font-size: 14px;
  line-height: 24px;
  font-family: roboto-light,Arial,sans-serif;
}

.resorts_item {
  display: flex;
  max-width: 910px;
  width: 100%;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .resorts_item {
    flex-direction: column;
  }

  .resorts_item_right {
    display: block;
    text-align: center;
    margin-top: 30px;
    max-width: 500px;
  }

  .resorts_item_left {
    margin-right: 0px;
  }
}



</style>