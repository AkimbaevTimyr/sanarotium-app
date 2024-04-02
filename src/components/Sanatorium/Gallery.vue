<script>
import VuePictureSwipe from "vue3-picture-swipe";
import {galleryImages} from "@/data/images.js";
import {vOnClickOutside} from "@vueuse/components";
import {getImageUrl} from "@/data/images.js";

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
    return {
      modal,
      currentImg
    }
  },
  setup() {
    return {
      galleryImages,
      getImageUrl
    }
  },
  methods: {
    handleClick(img) {
      this.currentImg = img.src;
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    nextImg() {
      this.currentImg = (this.galleryImages[this.indexImg + 1]).src;
    },
    previousImg() {
      this.currentImg = (this.galleryImages[this.indexImg -1]).src;
    }
  },
  computed: {
    indexImg() {
      const img = this.galleryImages.find(el => el.src === this.currentImg)
      return this.galleryImages.indexOf(img);
    }
  }
}
</script>

<template>
  <div class="sanatorium-gallery">
    <div class="sanatorium-gallery-left">
      <img alt="123" :src="getImageUrl('../assets/sanatoriums/', mainImg)" />
    </div>
    <div class="sanatorium-gallery-right">
      <div v-for="img in galleryImages" @click="handleClick(img)" style="cursor: pointer">
        <img
            class="sanatorium-gallery-right-img img-odd"
            alt="123"
            :src="getImageUrl('../assets/', img.src)"
        >
      </div>
    </div>
<!--    модальное окно с фотографиями-->
    <div class="modal" v-if="modal">
      <div class="modal-window">
          <div class="gallery-modal-image">
            <div @click="previousImg()" class="switcher-color"><</div>
            <Transition name="fade">
              <div>
                <img
                    class="modal-image"
                    :src="getImageUrl('../assets/', currentImg)"
                    alt="Room Image"
                >
              </div>
            </Transition>
            <div @click="nextImg()" class="switcher-color">></div>
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
  margin-bottom: 16px;
  margin-right: 6px;
}

.sanatorium-gallery-left {
  min-width: 900px;
  min-height: 400px;
  width: 100%;
  height: 100%;
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
  height: auto;
}

.sanatorium-gallery-left img {
  max-width: 900px;
  max-height: 400px;
  width: 100%;
  height: 100%;
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
}

.gallery-modal-image {
  display: flex;
  justify-content: space-between;
}

.modal-image {
  width: 100%;
  height: 100%;
}

.switcher-color {
  color:  white;
  cursor: pointer;
  font-size: 120px;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active в версии <2.1.8 */ {
  opacity: 0;
}


</style>