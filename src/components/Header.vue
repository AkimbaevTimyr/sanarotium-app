<script>
export default {
  name: "Header"
}
</script>

<template>
  <div class="header">
    <div class="header_wrapper">
      <div class="header_logo">
        <img alt="логотип сайта" src="../assets/logo.jpg" />
      </div>
      <div class="header_social">
        <div class="header_number">
<!--          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />-->
<!--          </svg>-->
          <div class="phone-numbers">
            <a href="tel:+994505722000">
              +99450 572-2000
            </a>
            <a href="tel:+74951453172">
              +7 495 145-3172
            </a>
            <a href="tel:+994504500018">
              +99450 450-0018
            </a>
          </div>
        </div>
        <div class="socials_item_img">
          <a href="https://youtube.com/@naftalanium?si=sdq30EEqjmQy5rK2" target="_blank">
              <svg id="youtube-colored" viewBox="0 0 60 60" width="24" height="24">
                <circle opacity=".75" cx="30" cy="30" r="30" fill="red"/>
                <svg id="youtube-logo" viewBox="0 0 40 29"  fill="#fff">
                  <path transform="translate(11 8) scale(0.45)" d="M38.44 2.49C36.998.72 34.332 0 29.24 0H10.76C5.551 0 2.84.768 1.401 2.65 0 4.486 0 7.19 0 10.933v7.134C0 25.318 1.664 29 10.76 29h18.48c4.415 0 6.862-.637 8.444-2.197C39.307 25.203 40 22.59 40 18.067v-7.134c0-3.947-.108-6.668-1.56-8.444ZM25.68 15.484l-8.392 4.518a1.26 1.26 0 0 1-1.266-.04 1.339 1.339 0 0 1-.622-1.138V9.818c0-.465.235-.895.62-1.136a1.258 1.258 0 0 1 1.265-.044l8.392 4.49c.427.227.695.681.696 1.177 0 .496-.267.95-.693 1.18Z"/>
                </svg>
              </svg>
          </a>
        </div>
        <div class="socials_item_img">
          <a href="https://www.instagram.com/naftalanium?igsh=eWZsdXJpbHBsaGJh&utm_source=qr" target="_blank">
            <svg class="icon size-60" viewBox="0 0 40 40" width="24" height="24">
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
          </a>
        </div>
        <div class="socials_item_img">
          <a href="https://www.tiktok.com/@naftalanium?_t=8kZCbJO1f09&_r=1" target="_blank">
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="tiktok"><path fill="#231f20" d="M395.51 444.79H111.73a47 47 0 0 1-46.9-46.9V114.11a47 47 0 0 1 46.9-46.9h283.78a47 47 0 0 1 46.9 46.9v283.78a47 47 0 0 1-46.9 46.9ZM111.73 77.13a37 37 0 0 0-37 37v283.76a37 37 0 0 0 37 37h283.78a37 37 0 0 0 37-37V114.11a37 37 0 0 0-37-37Z"></path><path fill="#ec1b52" d="M368.84 251.13v-41.9c-54.77-2.3-56.5-52.07-56.56-56.75v-.35H270v163.18a33.5 33.5 0 1 1-23.75-32.09V240a76 76 0 1 0 66.14 75.31c0-1.07 0-2.13-.07-3.18v-80.35c19.47 17.83 56.52 19.35 56.52 19.35Z"></path><path fill="#6ac9d2" d="M341.34 231.11v-41.89c-54.77-2.31-56.5-52.08-56.57-56.76v-.35h-42.29v163.18a33.51 33.51 0 1 1-23.76-32.09V220a76 76 0 1 0 66.15 75.31c0-1.07 0-2.12-.07-3.18v-80.37c19.48 17.83 56.54 19.35 56.54 19.35Z"></path><path fill="#231f20" d="M225.45 380.51a80.89 80.89 0 1 1 10.36-161.11l4.32.56v54.27l-6.4-2a28.76 28.76 0 0 0-8.29-1.24 28.56 28.56 0 0 0 0 57.11A28.59 28.59 0 0 0 254 299.62V131.49h52.2v5.31a62.14 62.14 0 0 0 7.16 26.88c8.57 15.65 23.59 24 44.66 24.92l4.75.19v51.82l-5.16-.21c-1.39-.06-30.38-1.4-51.38-14.42v70.37c.05 1.25.07 2.29.07 3.27a82.49 82.49 0 0 1-.67 10.42 81 81 0 0 1-80.18 70.47Zm-.2-151.88a70.92 70.92 0 1 0 71.12 71c0-1 0-2-.07-3v-91.79l8.31 7.6c13.76 12.6 37.74 16.49 48.24 17.62v-31.88c-46.91-4.38-54.93-42.76-56.3-56.78h-32.66v158.22a38.46 38.46 0 0 1-38.47 38.45 38.47 38.47 0 0 1 0-76.94 38 38 0 0 1 4.77.3V228.8c-1.63-.11-3.29-.17-4.94-.17Z"></path></svg>
          </a>
        </div>
        <div class="socials_item_img">
          <a target="_blank" href="https://www.facebook.com/share/GXFMBDBDfGidZQmL/?mibextid=hu50Ix">
            <svg id="facebook-colored" viewBox="0 0 60 60" width="24" height="24">
              <circle opacity=".75" cx="30" cy="30" r="30" fill="#4D6FA9"/>
              <svg id="facebook" viewBox="0 0 19 40" fill="#fff">
                <path fill-rule="evenodd"  transform="translate(5 10) scale(0.45)" clip-rule="evenodd" d="M4.11 7.747v5.506H0v6.734h4.11V40h8.435V19.987H18.2s.529-3.227.786-6.76h-6.414v-4.6c0-.694.922-1.614 1.83-1.614H19V0h-6.238c-8.843 0-8.64 6.747-8.64 7.747H4.11Z"/>
              </svg>
            </svg>
          </a>
        </div>
        <a>
          <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ff0000]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                  d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>



.header {
  border-bottom: 1px solid #EBECF1;
}

.icon {
  width: 24px;
}

.header_logo {
  width: 50px;
}

.header_logo img {
  min-width: 300px;
  width: 300px;
  height: 50px;
}

.header_social {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
}

.header_number {
  display: flex;
  color: #0C9EE4;
}

.header_wrapper {
  max-width: 1280px;
  max-height: 306px;
  height: 78px;
  width: 100%;
  margin-inline-start: auto;
  margin-inline-end: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 535px) {
  .header_logo {
    width: auto;
  }

  .header_wrapper {
    height: 130px;
    flex-direction: column;
    align-items: center;
  }

}

</style>