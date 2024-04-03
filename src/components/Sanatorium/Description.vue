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
      <div class="sanatorium-desc-expert-title">
        Какие болезни лечит нафталан?
      </div>
      <ul class="sanatorium-desc-list expert-list">
        <li>
          <span>
            <svg id="check-thin-blue" width="15px" height="15px">
               <svg id="check-thin-base" viewBox="0 0 40 33" fill="#0C9EE4">
                  <path fill-rule="evenodd" d="M0 19.933l3.267-4.027 10.147 8.933L36.08 0 40 3.853l-25.64 28.8L0 19.933z"/>
               </svg>
            </svg>
          </span>
          <p>
            Болезни суставов
          </p>
        </li>
        <li>
          <span>
            <svg id="check-thin-blue" width="15px" height="15px">
               <svg id="check-thin-base" viewBox="0 0 40 33" fill="#0C9EE4">
                  <path fill-rule="evenodd" d="M0 19.933l3.267-4.027 10.147 8.933L36.08 0 40 3.853l-25.64 28.8L0 19.933z"/>
               </svg>
            </svg>
          </span>
          <p>
            Кожные болезни
          </p>
        </li>
        <li>
          <span>
            <svg id="check-thin-blue" width="15px" height="15px">
               <svg id="check-thin-base" viewBox="0 0 40 33" fill="#0C9EE4">
                  <path fill-rule="evenodd" d="M0 19.933l3.267-4.027 10.147 8.933L36.08 0 40 3.853l-25.64 28.8L0 19.933z"/>
               </svg>
            </svg>
          </span>
          <p>
            Урологические болезни
          </p>
        </li>
        <li>
          <span>
            <svg id="check-thin-blue" width="15px" height="15px">
               <svg id="check-thin-base" viewBox="0 0 40 33" fill="#0C9EE4">
                  <path fill-rule="evenodd" d="M0 19.933l3.267-4.027 10.147 8.933L36.08 0 40 3.853l-25.64 28.8L0 19.933z"/>
               </svg>
            </svg>
          </span>
          <p>
            Болезни нервной системы
          </p>
        </li>
        <li>
          <span>
            <svg id="check-thin-blue" width="15px" height="15px">
               <svg id="check-thin-base" viewBox="0 0 40 33" fill="#0C9EE4">
                  <path fill-rule="evenodd" d="M0 19.933l3.267-4.027 10.147 8.933L36.08 0 40 3.853l-25.64 28.8L0 19.933z"/>
               </svg>
            </svg>
          </span>
          <p>
            Гинекологические болезни
          </p>
        </li>
        <li>
          <span>
            <svg id="check-thin-blue" width="15px" height="15px">
               <svg id="check-thin-base" viewBox="0 0 40 33" fill="#0C9EE4">
                  <path fill-rule="evenodd" d="M0 19.933l3.267-4.027 10.147 8.933L36.08 0 40 3.853l-25.64 28.8L0 19.933z"/>
               </svg>
            </svg>
          </span>
          <p>
            Болезни уха, горла, носа
          </p>
        </li>
      </ul>
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

.sanatorium-desc-expert {

}

.expert-list li {
  align-items: center;
  justify-content: center;
}
.sanatorium-desc-expert-title {
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: 400;
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