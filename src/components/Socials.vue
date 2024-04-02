<script>
export default {
  name: "Socials"
}
</script>

<template>
  <div class="socials">
    <div class="wrapper">
      <div class="socials_items">
        <div class="socials_item">
          <div class="socials_item_img">
            <svg id="facebook-colored" viewBox="0 0 60 60" width="60" height="60">
              <circle opacity=".75" cx="30" cy="30" r="30" fill="#4D6FA9"/>
              <svg id="facebook" viewBox="0 0 19 40" fill="#fff">
                <path fill-rule="evenodd"  transform="translate(5 10) scale(0.45)" clip-rule="evenodd" d="M4.11 7.747v5.506H0v6.734h4.11V40h8.435V19.987H18.2s.529-3.227.786-6.76h-6.414v-4.6c0-.694.922-1.614 1.83-1.614H19V0h-6.238c-8.843 0-8.64 6.747-8.64 7.747H4.11Z"/>
              </svg>
            </svg>
          </div>
          <div class="socials_item_title">
            Facebook
          </div>
          <div class="socials_item_desc">
            Подписывайтесь на нашу страницу в Facebook и будьте в курсе актуальных новостей.
          </div>
          <a class="overlay" target="_blank" href="https://www.facebook.com/share/GXFMBDBDfGidZQmL/?mibextid=hu50Ix"></a>
        </div>
        <div class="socials_item">
          <div class="socials_item_img">
            <svg id="youtube-colored" viewBox="0 0 60 60" width="60" height="60">
              <circle opacity=".75" cx="30" cy="30" r="30" fill="red"/>
              <svg id="youtube-logo" viewBox="0 0 40 29"  fill="#fff">
                <path transform="translate(11 8) scale(0.45)" d="M38.44 2.49C36.998.72 34.332 0 29.24 0H10.76C5.551 0 2.84.768 1.401 2.65 0 4.486 0 7.19 0 10.933v7.134C0 25.318 1.664 29 10.76 29h18.48c4.415 0 6.862-.637 8.444-2.197C39.307 25.203 40 22.59 40 18.067v-7.134c0-3.947-.108-6.668-1.56-8.444ZM25.68 15.484l-8.392 4.518a1.26 1.26 0 0 1-1.266-.04 1.339 1.339 0 0 1-.622-1.138V9.818c0-.465.235-.895.62-1.136a1.258 1.258 0 0 1 1.265-.044l8.392 4.49c.427.227.695.681.696 1.177 0 .496-.267.95-.693 1.18Z"/>
              </svg>
            </svg>
          </div>
          <div class="socials_item_title">
            Youtube
          </div>
          <div class="socials_item_desc">
            Подписывайтесь на наш YouTube канал, где публикуются видеообзоры санаториев, видео о лечении на курортах и интервью с докторами
          </div>
          <a class="overlay" target="_blank" href="https://youtube.com/@naftalanium?si=sdq30EEqjmQy5rK2"></a>
        </div>
        <div class="socials_item">
          <div class="socials_item_img">
            <svg class="icon size-60" viewBox="0 0 40 40" width="60" height="60">
              <path opacity=".75" d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z" fill="url(#gradient1)"></path>
              <path d="M23.5 10.667h-7a5.834 5.834 0 0 0-5.833 5.833v7a5.834 5.834 0 0 0 5.833 5.833h7a5.834 5.834 0 0 0 5.833-5.833v-7a5.834 5.834 0 0 0-5.833-5.833ZM27.583 23.5a4.088 4.088 0 0 1-4.083 4.083h-7a4.088 4.088 0 0 1-4.083-4.083v-7a4.088 4.088 0 0 1 4.083-4.083h7a4.088 4.088 0 0 1 4.083 4.083v7Z" fill="#fff"></path>
              <path d="M20 15.333a4.667 4.667 0 1 0 0 9.334 4.667 4.667 0 0 0 0-9.334Zm0 7.584A2.92 2.92 0 0 1 17.083 20 2.92 2.92 0 0 1 20 17.083 2.92 2.92 0 0 1 22.917 20 2.92 2.92 0 0 1 20 22.917ZM25.167 15.667a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" fill="#fff"></path>
              <defs>
                <linearGradient id="gradient1" x1="5.859" y1="34.145" x2="34.141" y2="5.859" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFC107"></stop>
                  <stop offset=".507" stop-color="#F44336"></stop>
                  <stop offset=".99" stop-color="#9C27B0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="socials_item_title">
            Instagram
          </div>
          <div class="socials_item_desc">
            Смотрите актуальные фотографии наших курортов и краткие видеообзоры санаториев на нашем Instagram аккаунте.
          </div>
          <a class="overlay"  target="_blank" href="https://www.instagram.com/naftalanium?igsh=eWZsdXJpbHBsaGJh&utm_source=qr"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.socials {
  margin-top: 50px;
  background-color: #F0F1F4;
  padding: 60px 0;
  margin-bottom: 60px;
}

.socials_item_title {
  margin-top: 40px;
  margin-bottom: 35px;
  font-size: 1.875em;
  font-weight: 500;
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

.socials_item_title:hover {

}

.socials_item {
  flex: 0 1 410px;
  text-align: center;
  align-items: center;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.socials_items {
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .socials_item {
    flex: 0 1 200px;
  }

  .socials_item_desc {
    font-size: 14px;
  }
}

@media (max-width: 600px) {
  .socials_items {
    display: block;
  }

  .socials_item {
    margin-bottom: 40px;
  }
}
</style>