<script>
export default {
  name: "Footer"
}
</script>

<template>
  <div class="footer">
    <div class="wrapper footer_wrapper">
      <div class="footer_items">
        <div class="footer_item footer_title">
          Sanatoriums.com
        </div>
        <div class="footer_item">
          <a href="#" class="footer_link">
            Контакты
          </a>
        </div>
        <div class="footer_item">
          <a href="#" class="footer_link">
            Выбор курорта
          </a>
        </div>
      </div>
      <div class="footer_items">
        <div class="footer_item footer_title">
          Курорты
        </div>
        <div class="footer_item">
          <a href="#" class="footer_link">
            Чехия
          </a>
        </div>
        <div class="footer_item" >
          <a href="#"  class="footer_link">
            Словакия
          </a>
        </div>
        <div class="footer_item">
          <a href="#" class="footer_link">
            Литва
          </a>
        </div>
      </div>
      <div class="footer_items">
        <div class="footer_item footer_title">
          Где нас найти
        </div>
        <div class="footer_items_social">
          <div class="footer_item">
            <a target="_blank" href="https://www.facebook.com/share/GXFMBDBDfGidZQmL/?mibextid=hu50Ix">
              <svg id="facebook" viewBox="0 0 19 40" fill="#0C9EE4" width="29" height="29">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.11 7.747v5.506H0v6.734h4.11V40h8.435V19.987H18.2s.529-3.227.786-6.76h-6.414v-4.6c0-.694.922-1.614 1.83-1.614H19V0h-6.238c-8.843 0-8.64 6.747-8.64 7.747H4.11Z"/>
              </svg>
            </a>
          </div>
          <div class="footer_item">
            <a target="_blank" href="https://www.instagram.com/naftalanium?igsh=eWZsdXJpbHBsaGJh&utm_source=qr">
              <svg id="instagram" viewBox="0 0 40 40" width="29" height="29" fill="#0C9EE4">
                <g fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M12.316 2.72c-5.31 0-9.604 4.532-9.604 10.085v14.164c0 5.552 4.294 10.085 9.604 10.085h15.368c5.31 0 9.604-4.533 9.604-10.085V12.804c0-5.552-4.294-10.084-9.604-10.084H12.316ZM27.684 40H12.316C5.536 40 0 34.221 0 27.082V12.918C0 5.779 5.537 0 12.316 0h15.368C34.464 0 40 5.779 40 12.918v14.164C40 34.221 34.463 40 27.684 40Z"/>
                  <path d="M20 11.331c-4.52 0-8.249 3.853-8.249 8.612 0 4.76 3.73 8.612 8.249 8.612 4.52 0 8.249-3.852 8.249-8.612 0-4.759-3.73-8.612-8.249-8.612Zm0 20.17c-6.102 0-10.96-5.212-10.96-11.558C9.04 13.598 14.01 8.385 20 8.385c6.102 0 10.96 5.213 10.96 11.558 0 6.346-4.971 11.558-10.96 11.558ZM33.107 8.725c0 1.36-1.017 2.38-2.26 2.38-1.242 0-2.26-1.02-2.26-2.38 0-1.36 1.018-2.38 2.26-2.38 1.243 0 2.26 1.02 2.26 2.38Z"/>
                </g>
              </svg>
            </a>
          </div>
          <div class="footer_item">
            <a href="#">
              <svg id="youtube" viewBox="0 0 33 40" fill="#0C9EE4">
                <g fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M32.402 20.667a4.11 4.11 0 0 0-1.277-2.214 4.074 4.074 0 0 0-2.287-1.053c-2.725-.293-6.847-.44-12.351-.44-5.505 0-9.613.147-12.325.44a3.995 3.995 0 0 0-2.287 1.053 4.303 4.303 0 0 0-1.29 2.214C.199 22.387 0 25 0 28.48c0 3.547.2 6.147.585 7.813.2.88.625 1.614 1.276 2.214.665.6 1.423.933 2.287 1.026C6.874 39.84 10.996 40 16.5 40c5.504 0 9.626-.16 12.352-.467a3.879 3.879 0 0 0 2.273-1.026 4.303 4.303 0 0 0 1.29-2.214c.386-1.72.585-4.333.585-7.813 0-3.547-.2-6.147-.585-7.813h-.013ZM9.413 22.92h-2.38v12.707h-2.22V22.92h-2.34v-2.093h6.94v2.093Zm6.01 12.707h-1.981v-1.2c-.798.906-1.556 1.36-2.274 1.36-.678 0-1.116-.28-1.29-.827-.119-.36-.172-.907-.172-1.627V24.6h1.98v8.12c0 .48.014.733.027.787.04.306.2.466.466.466.399 0 .824-.306 1.263-.933V24.6h1.981v11.027Zm7.565-3.307c0 1.08-.066 1.827-.2 2.227-.252.813-.784 1.226-1.581 1.226-.718 0-1.396-.413-2.074-1.226v1.066H17.15v-14.8h1.982v4.84c.638-.8 1.33-1.2 2.074-1.2.797 0 1.33.414 1.582 1.254.133.386.2 1.12.2 2.213v4.4Zm7.526-1.827h-3.989v1.947c0 1.027.346 1.547 1.024 1.547.492 0 .784-.267.89-.8.027-.147.04-.6.04-1.36H30.5v.293c0 .733-.013 1.16-.04 1.293-.04.4-.199.8-.465 1.2-.532.787-1.33 1.187-2.406 1.187-1.024 0-1.822-.373-2.407-1.133-.425-.547-.651-1.414-.651-2.587v-3.867c0-1.173.212-2.04.625-2.586.585-.76 1.369-1.134 2.38-1.134.997 0 1.781.374 2.353 1.134.399.546.598 1.413.598 2.586v2.294l.027-.014Z"/>
                  <path d="M20.143 26.267c-.346 0-.678.16-.997.493v6.72c.332.333.665.493.997.493.585 0 .864-.493.864-1.493v-4.707c0-1-.292-1.493-.864-1.493v-.013ZM27.522 26.267c-.665 0-.997.506-.997 1.52v1.026h2.008v-1.026c0-1.014-.333-1.52-.998-1.52h-.013ZM8.124 8.907v6.053h2.22V8.907L13.044 0H10.77L9.254 5.867 7.672 0H5.318c.412 1.253.904 2.64 1.45 4.173.69 2.054 1.143 3.627 1.356 4.734ZM16.021 15.107c1.024 0 1.809-.374 2.354-1.134.412-.546.625-1.426.625-2.64V7.427c0-1.187-.213-2.067-.625-2.614-.545-.76-1.33-1.133-2.354-1.133-.997 0-1.768.373-2.34 1.133-.412.547-.625 1.427-.625 2.614v3.906c0 1.187.213 2.067.625 2.64.559.76 1.343 1.134 2.34 1.134Zm-.957-8.08c0-1.027.32-1.547.957-1.547.639 0 .958.52.958 1.547v4.693c0 1.04-.32 1.56-.958 1.56-.638 0-.957-.52-.957-1.56V7.027ZM22.137 15.107c.745 0 1.503-.467 2.287-1.387v1.227h2.021V3.813h-2.02v8.507c-.44.64-.865.96-1.264.96-.266 0-.425-.16-.465-.493-.013-.027-.027-.294-.027-.787V3.813h-2.02v8.8c0 .76.066 1.32.172 1.68.2.547.625.827 1.316.827v-.013Z"/>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="footer-rules">
        <div class="footer_rules_links">
          <a>
            © 2024 Sanatoriums.com |
          </a>
          <a href="#" class="rules_link">
            Политика конфиденциальности |
          </a>
          <a href="#" class="rules_link">
            Использование куки |
          </a>
          <a href="#" class="rules_link">
            Перейти к мобильной версии
          </a>
        </div>
        <div class="footer_law">
          Все права защищены и охраняются законом. При полном или частичном использовании материалов сайта, прямая индексируемая ссылка на www.sanatoriums.com обязательна.
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.footer {
  background: #F0F1F4;
  padding: 35px 0;
}

.footer_wrapper {
  display: flex;
  justify-content: space-between;
}

.footer_title {
  font-size: 1.1em;
  font-family: roboto,Arial,sans-serif;
  font-weight: 400;
  margin-bottom: 15px;
}

.footer_link {
  border-bottom: 1px solid black;
}
.footer_link:hover {
  border: none;
  transition: 0.5s;
}

.rules_link {
  color: #0C9EE4;
}

.rules_link:hover {
  border-bottom: 1px solid #0C9EE4;
  transition: ease-in;
}

.footer_items_social {
  display: flex;
  margin-top: 15px;
}

.footer_law {
  font-size: .85em;
  margin-top: 15px;
  text-align: center;
  clear: both;
}

.footer-rules {
  margin-top: 30px;
}

.footer_rules_links {
  display: block;
  text-align: center;
}

@media (max-width: 768px) {
  .footer {
    padding: 35px 35px;
  }
}

@media (max-width: 450px) {
  .footer_wrapper {
    flex-direction: column;
    justify-content: center;
  }
  .footer_items_social {
    justify-content: center;
  }
  .footer_items {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
}


</style>