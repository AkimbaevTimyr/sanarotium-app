<script>
import VuePictureSwipe from "vue3-picture-swipe";
import {galleryImages} from "@/data/images.js";
import {vOnClickOutside} from "@vueuse/components";

export default {
  name: "Gallery",
  components: {VuePictureSwipe},
  props: {
    mainImg: {
      required: true,
      type: String
    }
  },
  directives: {
    onClickOutside: vOnClickOutside,
  },
  data() {
    let modal = false;
    let currentImg = null;
    let modalWidth = 0;
    let modalHeight = 0;
    return {
      modal,
      currentImg,
      modalHeight,
      modalWidth,
    }
  },
  setup() {
    return {
      galleryImages,
    }
  },
  methods: {
    handleClick(img) {
      this.currentImg = img.src;
      this.modal = true;
      document.body.classList.add('modal-open');
    },
    closeModal() {
      this.modal = false;
      document.body.classList.remove('modal-open');
    },
    nextImg() {
      this.currentImg = (this.galleryImages[this.indexImg + 1]).src;
    },
    previousImg() {
      this.currentImg = (this.galleryImages[this.indexImg -1]).src;
    },
    updateModalSize(event) {
      const img = this.$refs.modalImage;
      this.modalWidth = img.naturalWidth;
      this.modalHeight = img.naturalHeight;
    },
    getImageSanatoriumsUrl(name) {
      return new URL(`../../assets/sanatoriums/${name}`, import.meta.url).href
    },
    getImageUrl(name) {
      return new URL(`../../assets/${name}`, import.meta.url).href
    }
  },
  computed: {
    indexImg() {
      const img = this.galleryImages.find(el => el.src === this.currentImg)
      return this.galleryImages.indexOf(img);
    },
    imgTotalCount() {
      return galleryImages.length;
    }
  }
}
</script>

<template>
  <div class="sanatorium-gallery">
    <div class="sanatorium-gallery-left">
      <img alt="123" :src="getImageSanatoriumsUrl(mainImg)" />
    </div>
    <div class="sanatorium-gallery-right">
      <div class="img-container img-odd" v-for="img in galleryImages" @click="handleClick(img)" style="cursor: pointer">
        <img
            class="sanatorium-gallery-right-img"
            alt="123"
            :src="getImageUrl(img.src)"
        >
      </div>
    </div>
    <!--    модальное окно с фотографиями-->
    <div class="modal" v-if="modal">
      <div
          class="modal-window"
          v-on-click-outside="closeModal"

      >
          <div class="gallery-modal-image"  :style="{
            width: modalWidth + 'px',
            height: modalHeight + 'px'
          }">
            <Transition name="fade">
                <img
                    ref="modalImage"
                    @load="updateModalSize"
                    class="modal-image"
                    :src="getImageUrl(currentImg)"
                    alt="Room Image"
                >
            </Transition>
            <div>
              <button @click="modal = !modal" class="modal_button">
                <svg id="cross-thin-white" width="25px" height="25px">
                  <svg id="cross-thin-base" viewBox="0 0 40 40" fill="#ffffff">
                    <path fill-rule="evenodd" d="M2.493 0L0 2.493 17.507 20 0 37.507 2.493 40 20 22.493 37.507 40 40 37.507 22.493 20 40 2.493 37.507 0 20 17.507 2.493 0z"/>
                  </svg>
                </svg>
              </button>
            </div>
          </div>
          <div class="gallery-modal-buttons">
            <button :disabled="indexImg === 0" @click="previousImg()" class="switcher-color">Предыдущая</button>
            <div>   {{ ++indexImg }} / {{ imgTotalCount }}   </div>
            <button :disabled="++indexImg === imgTotalCount" @click="nextImg()" class="switcher-color">Следующая</button>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.sanatorium-gallery {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  margin-top: 20px;
}

.img-even {
  margin-bottom: 16px;
  margin-left: 6px;
}

.img-odd {
  margin-right: 6px;
}

.sanatorium-gallery-left {
  min-width: 900px;
  min-height: 400px;
  width: 100%;
  height: 100%;
}

.sanatorium-gallery-left img {
  border-radius: 3px;
}

.sanatorium-gallery-right {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: 16px;
}

.sanatorium-gallery-right-img {
  max-width: 175px;
  width: 100%;
  max-height: 128px;
  height: 100%;
  min-height: 128px;
}

.sanatorium-gallery-left img {
  max-width: 900px;
  max-height: 400px;
  width: 100%;
  height: 100%;
}

.img-container {
  position: relative;
  max-width: 175px;
  width: 100%;
  max-height: 128px;
  height: 100%;
}

.img-container img {
  border-radius: 3px;
}

.img-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2); /* Прозрачный белый цвет */
  opacity: 0; /* Начальная прозрачность */
  transition: opacity 0.3s ease; /* Добавляем плавное изменение прозрачности */
}

.img-container:hover::before {
  opacity: 1; /* Увеличиваем прозрачность при наведении */
}

.modal {
  width: 100%;
  background: rgba(0,0,0,.75);
  display: flex;
  inset-inline-start: 0;
  inset-inline-end: 0;
  top: 0;
  bottom: 0;
  z-index: 1150;
  position: fixed;
  align-items: center;
  justify-content: center;
}

.modal-window {
  background-color: #fff; /* Белый фон для модального окна */
  padding: 20px; /* Отступы внутри модального окна */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Тень для модального окна */
  z-index: 1001; /* Убедитесь, что модальное окно находится выше фона */
  border-radius: 20px;
}

.gallery-modal-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-image {
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.switcher-color {
  color:  black;
  font-size: 20px;
}

.modal_button {
  display: block;
  line-height: 22px;
  color: #fff;
  inset-inline-end: 10px;
  top: 30px;
  font-size: 1.15em;
  padding-inline-end: 30px;
  cursor: pointer;
  z-index: 1300;
  transition: .2s;
  transition-timing-function: ease;
  will-change: auto;
  position: absolute;
}

.gallery-modal-buttons{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

@media (max-width: 1280px) {
  .sanatorium-gallery {
    flex-direction: column;
  }

  .sanatorium-gallery-left {
    display: flex;
    justify-content: center;
  }

  .sanatorium-gallery-right {
    margin-top: 20px;
    justify-content: center;
  }

  .img-odd {
    margin-left: 12px;
  }
}

@media (max-width: 1180px) {
  .img-container {
    margin-bottom: 10px;
  }
}

@media (max-width: 1100px) {
  .sanatorium-gallery-left{
    min-width: 80%;
  }
}

@media (max-width: 767px) {
  .sanatorium-gallery-left {
    min-height: 0px;
  }

  .sanatorium-gallery-right {
    margin-left: 0px;
  }
}

@media (max-width: 578px) {
  .img-odd {
    margin-left: 0;
  }
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(0);
}

</style>