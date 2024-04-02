<script>
import {servicesData} from "@/data/service.js";

export default {
  name: "Service",
  data() {
    let showMobileMenu = false;
    let showInfo = true;
    let selectedInfoTab = [];
    let selected_tab = 1;
    return {
      selected_tab,
      showInfo,
      showMobileMenu,
      servicesData,
      selectedInfoTab,
    }
  },
  setup() {
    return servicesData
  },
  methods: {
    handleClick(id) {
      let item = this.selectedInfoTab.find(item => item.id === id);

      if(item){
        item.show = !item.show;
      } else {
        this.selectedInfoTab.push({id, show: true});
      }
    },
    onResize() {
      this.showMobileMenu =
          document.documentElement.clientWidth > 768 ? false : true;
    },
    getArrowTransform(item) {
      const selectedItem = this.selectedInfoTab.find(obj => obj.id === item.id && obj.show === true);
      return selectedItem ? 'rotate(90deg) scaleX(-1)' : 'rotate(90deg) scaleX(1)';
    }
  },
  mounted() {
    this.onResize();
  },
}
</script>

<template>
  <div class="sanatorium-service">
    <div class="sanatorium-service-title">
      Услуги в Санаторий Krivan
    </div>
    <div class="sanatorium-service-items" v-if="!showMobileMenu">
      <div class="sanatorium-service-block" v-for="item in servicesData">
        <div class="sanatorium-service-item">
          <div class="sanatorium-service-item-img">
            <svg id="hotel-activity" viewBox="0 0 40 40" fill="#0C9EE4" width="54px" height="54px">
              <svg id="outline-circle" viewBox="0 0 40 40" fill="#0C9EE4">
                <circle cx="20" cy="20" r="19.5" stroke="currentColor" fill="none"/>
              </svg>
              <path transform="translate(9 9)" d="m8.044 11.39 9.77-9.908M9.256 12.955l10.3-10.281m-8.785 11.249 9.846-9.61M9.408 9.973l2.803 2.906m.984 1.415 7.801-7.524m-11.738.67 5.452 5.439m2.12-10.43 2.954 3.055m-5.53-3.055 5.53 5.663M7.514 9.156l8.18-8.046m1.665 11.77L8.953 4.685m9.769 7.003L10.089 3.42m9.693 6.927-8.255-8.045M6.907 16.68l-1.439-1.341m1.439-2.16s.379 1.638 1.893 2.16m3.105-1.119C8.5 14.223 2.363 21 2.363 21L1 19.66s2.65-2.162 4.696-4.694c1.21-1.564 2.044-3.128 1.969-4.545l4.24 3.8Zm7.621-11.556C17.5.09 12.95.63 10.034 3.404c-2.12 2.017-2.95 4.77-2.354 7.033.225.849.651 1.628 1.285 2.275.824.838 1.89 1.337 3.052 1.51 2.118.314 4.557-.458 6.44-2.25 2.917-2.775 3.395-6.942 1.068-9.308h.002Zm-2.47 15.058c0-.946-.781-1.714-1.743-1.714-.962 0-1.742.768-1.742 1.714s.78 1.714 1.742 1.714 1.742-.768 1.742-1.714Z"/>
            </svg>
          </div>
          <div>
            <div class="sanatorium-service-item-title">
              {{ item.name }}
            </div>
            <ul class="sanatorium-service-item-list" v-for="info in item.serviceInfo">
              <li>
                    <span>
                      <svg id="check-thin-blue" width="15px" height="15px">
                         <svg id="check-thin-base" viewBox="0 0 40 33" fill="#0C9EE4">
                            <path fill-rule="evenodd" d="M0 19.933l3.267-4.027 10.147 8.933L36.08 0 40 3.853l-25.64 28.8L0 19.933z"/>
                         </svg>
                      </svg>
                    </span>
                <p>
                  {{ info.text }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-menu" v-if="showMobileMenu">
      <div class="mobile-menu-item" v-for="item in servicesData">
        <div class="sanatorium-service-item-title mobile-menu-item-title"
             style="cursor:pointer;"
             @click="handleClick(item.id)"
        >
          {{ item.name }}
          <svg
              id="arrow-middle-base"
              :style="{transform: getArrowTransform(item)}"
              viewBox="0 0 25 40"
              width="14px"
              fill="#0C9EE4"
          >
            <path fill-rule="evenodd" d="M24.227 20l-22 20-2-2.253 19.671-17.813L.227 2.44l2-2.44 22 20z"/>
          </svg>
        </div>
        <Transition name="slide-fade">
          <div v-show="selectedInfoTab.find(obj => obj.id === item.id && obj.show === true)">
            <ul class="sanatorium-service-item-list" v-for="info in item.serviceInfo">
              <li>
              <span>
                <svg id="check-thin-blue" width="15px" height="15px">
                   <svg id="check-thin-base" viewBox="0 0 40 33" fill="#0C9EE4">
                      <path fill-rule="evenodd" d="M0 19.933l3.267-4.027 10.147 8.933L36.08 0 40 3.853l-25.64 28.8L0 19.933z"/>
                   </svg>
                </svg>
              </span>
                <p>
                  {{ info.text }}
                </p>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  </div>

</template>

<style scoped>

.sanatorium-service {
  margin-top: 30px;
}

#outline-circle{
  color: #0C9EE4;
}

#check-thin-blue{
  margin-top: 5px;
  margin-right: 5px;
}

#hotel-activity {
  margin-right: 15px;
}

.sanatorium-service-title {
  font-size: 28px;
}

.sanatorium-service-items {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}

.sanatorium-service-block {
}

.sanatorium-service-item {
  display: flex;
  max-width: 450px;
}

.sanatorium-service-item-title {
  font-size: 1.4em;
  margin: 0 0 4px 0;
}

.sanatorium-service-item-list li{
  display: flex;
  font-size: 15px;
  font-family: roboto,Arial,sans-serif;
}


.mobile-menu {

}

.mobile-menu-item {
  border-bottom: 1px solid #EBECF1;
  padding: 20px;
}

.mobile-menu-item-title {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 767px) {
  .sanatorium-service-items {
    flex-wrap: wrap;
    justify-content: center;
  }
  .sanatorium-service-title {
    text-align: center;
  }
  .sanatorium-service-block {
    max-width: 340px;
    margin: 10px;
  }

  .sanatorium-service-item {
    flex-direction: column;
  }

  .sanatorium-service-item-img {
    display: flex;
    justify-content: center;
  }

  .sanatorium-service-item-title {
    text-align: center;
  }

  .sanatorium-service-item-list {
    display: flex;
    justify-content: center;
  }

  #hotel-activity {
    margin-right: 0px;
  }

}

.arrow-middle-base-down {
  transform: rotate(90deg) scaleX(1);
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>