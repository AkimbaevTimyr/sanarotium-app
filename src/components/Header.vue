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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
          <a href="tel:+77072152002">
            +77072152002
          </a>
        </div>
        <a href="https://wa.me/77072152002" target="_blank">
          <span class="[&>svg]:h-5 [&>svg]:w-5">
            <svg
                class="icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="#2bb742"
                viewBox="0 0 448 512">
              <path
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </span>
        </a>
        <a href="https://t.me/dominiccobb21" target="_blank">
          <span class="[&>svg]:h-5 [&>svg]:w-5">
            <svg
                class="icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="#41b4e6"
                viewBox="0 0 496 512">
              <path
                  d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
            </svg>
          </span>
        </a>
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
  width: 200px;
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

@media (max-width: 511px) {
  .header_logo {
    width: auto;
  }

  .header_wrapper {
    height: 90px;
    flex-direction: column;
    align-items: center;
  }

}

</style>