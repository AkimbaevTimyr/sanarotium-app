<script>
export default {
  name: "Description",
  props: {
    description: {
      required: true,
      type: String
    },
    descList: {
      required: true,
      type: Array
    },
  }
}
</script>

<template>
  <div class="sanatorium-desc">
    <div class="sanatorium-desc-list">
      <ul>
        <li v-for="item in descList">
          <span>
            <svg id="check-rounded" viewBox="0 0 20 20" class="icon" width="16px">
                <circle cx="10" cy="10" r="10" fill="currentColor"/>
                <path fill="white" d="M5.342 9.517L4 11l4.449 4.025 7.38-8.157-1.483-1.342-6.038 6.674-2.966-2.684z"/>
            </svg>
          </span>
          <p>
            {{ item }}
          </p>
        </li>
      </ul>
    </div>
    <div class="sanatorium-desc-text" v-html="description.replace(/\n/g, '<br>')">
    </div>
    <div class="sanatorium-desc-expert">
<!--      тут должно быть мнение эксперта-->
    </div>
  </div>

</template>

<style scoped>
.sanatorium-desc-text {
  max-width: 550px;
}

.sanatorium-desc-list {
  max-width: 320px;
}

.icon {
  color: #89DE66;
}

.sanatorium-desc {
  display: flex;
  justify-content: space-between;
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

@media (max-width: 767px) {
  .sanatorium-desc-text {
    font-size: 14px;
  }
}

@media (max-width: 600px) {
  .sanatorium-desc {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 500px) {
  .sanatorium-desc-text {
    padding: 0 10px;
  }
}
</style>