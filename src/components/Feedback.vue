<script>
export default {
  name: "Feedback",
  data() {
    let modal = false;
    return {
      modal
    }
  },
}
</script>

<template>

  <div class="feedback">
    <div class="wrapper feedback_video" @click="modal = !modal">
      картинка компании клик по картинке
      <img class="feedback_video_img" src="../assets/video-image.jpeg" alt="video-image"/>
    </div>
    <div class="video_modal" v-show="modal">
      <button @click="modal = !modal" class="modal_button">
        <svg id="cross-thin-white" width="30px" height="30px">
          <svg id="cross-thin-base" viewBox="0 0 40 40" fill="#FFFFFF">
            <path fill-rule="evenodd" d="M2.493 0L0 2.493 17.507 20 0 37.507 2.493 40 20 22.493 37.507 40 40 37.507 22.493 20 40 2.493 37.507 0 20 17.507 2.493 0z"/>
          </svg>
        </svg>
      </button>
      <iframe class="video-iframe" width="1280" height="700" src="https://www.youtube.com/embed/ZeKRMqCgby0" title="Нафталан спасение от многих заболеваний!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="feedback_wrapper">
      <div class="feedback_wrapper_title">
        Отзывы о компании sanatoriums.com
      </div>
      <div class="feedback_wrapper_desc">
        Реальные отзывы клиентов помогают пользователям сделать правильный выбор и указывают нам на ошибки. Если вы воспользовались нашими услугами – не забудьте оставить свой отзыв, он появится здесь в тот же день!
      </div>
      <div class="references">
        <div class="references_items">
          <div class="references_item">
            <div class="references_item_body">
              <div class="references_item_title">
                <svg id="thumbs-up" viewBox="0 0 42 38" width="17" height="15" fill="#44BE14">
                  <path d="M24.66 1.338 13.348 12.757a.96.96 0 0 1-.101.089c-.458.346-.77.982-.77 1.938v19.31c0 1.596 1.298 2.906 2.88 2.906h17.216c1.13 0 2.138-.716 2.572-1.735l.001-.003 5.737-13.705.012-.028.014-.028c.02-.04.052-.146.072-.343.018-.187.019-.383.019-.58v-3.863c0-1.662-1.169-2.906-2.688-2.906H27.048a1.588 1.588 0 0 1-1.542-1.936c.234-1.067.67-3.053 1.047-4.793.188-.87.362-1.676.488-2.275.097-.46.061-.965-.087-1.411-.258-.78-.661-1.959-.866-2.148-.37-.342-.998-.342-1.428.092ZM1 18.62V34.12a2.879 2.879 0 0 0 5.758 0V18.619a2.879 2.879 0 0 0-5.758 0Z" stroke="currentColor"/>
                </svg>
                <span>
                Я рекомендую
              </span>
              </div>
              <div class="references_item_desc">
                Отлично,молодцы,в следующий раз опять с вами.
              </div>
            </div>
            <div class="references_item_name">
              Сергей Иванов
            </div>
          </div>
          <div class="references_item">
            <div class="references_item_body">
              <div class="references_item_title">
                <svg id="thumbs-up" viewBox="0 0 42 38" width="17" height="15" fill="#44BE14">
                  <path d="M24.66 1.338 13.348 12.757a.96.96 0 0 1-.101.089c-.458.346-.77.982-.77 1.938v19.31c0 1.596 1.298 2.906 2.88 2.906h17.216c1.13 0 2.138-.716 2.572-1.735l.001-.003 5.737-13.705.012-.028.014-.028c.02-.04.052-.146.072-.343.018-.187.019-.383.019-.58v-3.863c0-1.662-1.169-2.906-2.688-2.906H27.048a1.588 1.588 0 0 1-1.542-1.936c.234-1.067.67-3.053 1.047-4.793.188-.87.362-1.676.488-2.275.097-.46.061-.965-.087-1.411-.258-.78-.661-1.959-.866-2.148-.37-.342-.998-.342-1.428.092ZM1 18.62V34.12a2.879 2.879 0 0 0 5.758 0V18.619a2.879 2.879 0 0 0-5.758 0Z" stroke="currentColor"/>
                </svg>
                <span>
                Я рекомендую
              </span>
              </div>
              <div class="references_item_desc">
                Отлично,молодцы,в следующий раз опять с вами.
              </div>
            </div>
            <div class="references_item_name">
              Сергей Иванов
            </div>
          </div>
          <div class="references_item">
            <div class="references_item_body">
              <div class="references_item_title">
                <svg id="thumbs-up" viewBox="0 0 42 38" width="17" height="15" fill="#44BE14">
                  <path d="M24.66 1.338 13.348 12.757a.96.96 0 0 1-.101.089c-.458.346-.77.982-.77 1.938v19.31c0 1.596 1.298 2.906 2.88 2.906h17.216c1.13 0 2.138-.716 2.572-1.735l.001-.003 5.737-13.705.012-.028.014-.028c.02-.04.052-.146.072-.343.018-.187.019-.383.019-.58v-3.863c0-1.662-1.169-2.906-2.688-2.906H27.048a1.588 1.588 0 0 1-1.542-1.936c.234-1.067.67-3.053 1.047-4.793.188-.87.362-1.676.488-2.275.097-.46.061-.965-.087-1.411-.258-.78-.661-1.959-.866-2.148-.37-.342-.998-.342-1.428.092ZM1 18.62V34.12a2.879 2.879 0 0 0 5.758 0V18.619a2.879 2.879 0 0 0-5.758 0Z" stroke="currentColor"/>
                </svg>
                <span>
                Я рекомендую
              </span>
              </div>
              <div class="references_item_desc">
                Отлично,молодцы,в следующий раз опять с вами.
              </div>
            </div>
            <div class="references_item_name">
              Сергей Иванов
            </div>
          </div>
        </div>
        <div class="references_button">
          Показать все отзывы о компании
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

.references {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.references_items {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 100px;
}

.feedback_video {
  max-width: 1280px;
  min-height: 220px;
  height: 100%;
  background: blue;
}

.references_item {

}

.references_item_body {
  background-color: white;
  padding: 14px;
  max-width: 370px;
  min-height: 145px;
  height: 100%;
  width: 100%;
  margin-bottom: 10px;
}

.video_modal {
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

.feedback_video_img {
  width: 1280px;
  height: 220px;
}

.references_item_body:after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 15px 0 0;
  border-color: #fff transparent transparent transparent;
}

.references_item_name {
  font-size: 15px;
  color: #474C56;
  line-height: 1;
  font-weight: 400;
}

.references_item_title {
  color: #288600;
  font-weight: 500;
  font-family: roboto-medium,Arial,sans-serif;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.references_item_title span {
  margin-left: 13px;
}

.references_item_desc {
  padding-left: 30px;
  font-style: italic;
  color: #474C56;
  font-size: 14px;
  line-height: 1.7;
  font-weight: 400;
}

.feedback_wrapper_title {
  text-align: center;
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 15px;
}


.feedback_wrapper_desc{
  text-align: center;
  display: flex;
  justify-content: center;
  color: #333;
  font-size: 15px;
  margin-bottom: 25px;
  font-weight: 400;
}


.references_button {
  width: 400px;
  padding: 15px;
  background-color: #0C9EE4;
  color: white;
  font-family: roboto,Arial,sans-serif;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 50px;
}

.references_button:hover {
  transition: 0.5s;
  scale: 1.03;
}

.feedback_wrapper {
  max-width: 1280px;
  width: 100%;
  margin-inline-start: auto;
  background: rgba(246,246,246,.95);
  margin-inline-end: auto;
  align-items: center;
  padding: 40px 50px 35px 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

@media (max-width: 1200px) {
  .video-iframe {
    max-width: 900px;
    height: 500px;
  }
}

@media (max-width: 1000px) {
  .video-iframe {
    max-width: 800px;
    width: 100%;
    height: 400px;
  }
}

@media (max-width: 768px) {
  .video-iframe {
    max-width: 500px;
    width: 100%;
    height: 300px;
  }
  .references_items {
    display: block;
  }
  .references_item {
    margin-bottom: 20px;
  }
}

@media (max-width: 500px) {
  .video-iframe {
    max-width: 350px;
    height: 200px;
  }
}

@media (max-width: 400px) {
  .references_button {
    max-width: 300px;
  }
}
</style>