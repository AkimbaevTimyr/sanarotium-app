<script>
import { vOnClickOutside } from '@vueuse/components'
import {details} from "@/data/rooms.js";

export default {
  name: "Rooms",
  directives: {
    onClickOutside: vOnClickOutside,
  },
  props: {
    items: {
      required: true,
      type: Array
    }
  },
  data() {
    let modal = false;
    let currentRoomId = 0;
    return {
      modal,
      currentRoomId
    }
  },
  setup() {
    return {details}
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../../assets/${name}`, import.meta.url).href
    },
    openModal(e, roomId) {
      e.preventDefault();
      e.stopPropagation();
      this.modal = true;
      this.currentRoomId = roomId
      document.body.classList.add('modal-open');
    },
    closeModal() {
      this.modal = false;
      document.body.classList.remove('modal-open');
    }
  },
  computed: {
    currentRoom() {
      return this.items.find((el) => el.roomId === this.currentRoomId)
    }
  }
}
</script>

<template>
  <div class="rooms">
    <div class="rooms-title">
      Номера
    </div>
    <div class="rooms-block" style="display: flex; justify-content: space-between">
      <div class="rooms-items">
        <div v-for="item in items">
          <a href="#" class="rooms-item">
            <div class="rooms-item-img">
              <img :src="getImageUrl(item.img)" class="room-img"  alt="room"/>
            </div>
            <div class="room-occupancy">
              <div v-if="item.type == 'one'">
                <svg id="person" viewBox="0 0 34 40" fill="#333" width="12px">
                  <path d="M17 0C11.36 0 6.772 4.471 6.772 9.966S11.36 19.931 17 19.931s10.228-4.471 10.228-9.965S22.64 0 17 0zm16.967 37.246c-.31-4.585-2.839-8.618-6.614-11.203-2.746-1.881-6.152-2.994-9.841-2.994H16.49C7.382 23.049 0 29.833 0 38.202V40h34v-1.798a13.72 13.72 0 0 0-.033-.955z"/>
                </svg>
              </div>
              <div v-else style="display: flex">
                <svg id="person" viewBox="0 0 34 40" fill="#333" width="12px">
                  <path d="M17 0C11.36 0 6.772 4.471 6.772 9.966S11.36 19.931 17 19.931s10.228-4.471 10.228-9.965S22.64 0 17 0zm16.967 37.246c-.31-4.585-2.839-8.618-6.614-11.203-2.746-1.881-6.152-2.994-9.841-2.994H16.49C7.382 23.049 0 29.833 0 38.202V40h34v-1.798a13.72 13.72 0 0 0-.033-.955z"/>
                </svg>
                <svg id="person" viewBox="0 0 34 40" fill="#333" width="12px">
                  <path d="M17 0C11.36 0 6.772 4.471 6.772 9.966S11.36 19.931 17 19.931s10.228-4.471 10.228-9.965S22.64 0 17 0zm16.967 37.246c-.31-4.585-2.839-8.618-6.614-11.203-2.746-1.881-6.152-2.994-9.841-2.994H16.49C7.382 23.049 0 29.833 0 38.202V40h34v-1.798a13.72 13.72 0 0 0-.033-.955z"/>
                </svg>
              </div>
            </div>
            <div class="rooms-item-desc">
              <div class="rooms-item-desc-title">
                {{ item.name }}
              </div>
              <div class="rooms-item-desc-text">
                 {{ item.description }}&nbsp<span @click.stop="e => openModal(e, item.roomId)">детально о номере</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="rooms-buttons">
        <div class="rooms-button">
          <div class="rooms-button-info">
            Бронируйте проживание с питанием и лечебным пакетом
          </div>
          <div class="rooms-button-btn">
            <svg id="bed2" viewBox="0 0 47 35" fill="#FFF" width="30px">
              <path d="M46.02 19.444H7.834V.972A.975.975 0 0 0 6.854 0H.98A.975.975 0 0 0 0 .972v33.056c0 .537.438.972.98.972h5.874c.541 0 .98-.435.98-.972v-6.806h31.333v6.806c0 .537.438.972.979.972h5.875c.541 0 .979-.435.979-.972V20.417a.975.975 0 0 0-.98-.973Z"/>
              <path d="M15.667 17.5c3.244 0 5.875-2.612 5.875-5.833 0-3.222-2.63-5.834-5.875-5.834s-5.875 2.612-5.875 5.834c0 3.221 2.63 5.833 5.875 5.833ZM24.48 17.5h21.54c.542 0 .98-.435.98-.972 0-5.897-4.832-10.695-10.77-10.695H24.48a.975.975 0 0 0-.98.973v9.722c0 .537.438.972.98.972Z"/>
            </svg>
            <p @click="$emit('show-price')">
              Показать цены <br/>
              <span>на номера</span>
            </p>
          </div>
<!--          <div class="or">-->
<!--            ИЛИ-->
<!--          </div>-->
<!--          <div class="rooms-button-info">-->
<!--            Бронируйте проживание с авиаперелетом и трансфером-->
<!--          </div>-->
<!--          <div class="rooms-button-btn">-->
<!--            <svg id="bed2" viewBox="0 0 47 35" fill="#FFF" width="30px">-->
<!--              <path d="M46.02 19.444H7.834V.972A.975.975 0 0 0 6.854 0H.98A.975.975 0 0 0 0 .972v33.056c0 .537.438.972.98.972h5.874c.541 0 .98-.435.98-.972v-6.806h31.333v6.806c0 .537.438.972.979.972h5.875c.541 0 .979-.435.979-.972V20.417a.975.975 0 0 0-.98-.973Z"/>-->
<!--              <path d="M15.667 17.5c3.244 0 5.875-2.612 5.875-5.833 0-3.222-2.63-5.834-5.875-5.834s-5.875 2.612-5.875 5.834c0 3.221 2.63 5.833 5.875 5.833ZM24.48 17.5h21.54c.542 0 .98-.435.98-.972 0-5.897-4.832-10.695-10.77-10.695H24.48a.975.975 0 0 0-.98.973v9.722c0 .537.438.972.98.972Z"/>-->
<!--            </svg>-->
<!--            <p>-->
<!--              Показать цены <br/>-->
<!--              <span>на авиатур</span>-->
<!--            </p>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
  <div class="modal" v-if="modal">
    <div class="modal-window" v-on-click-outside="closeModal">
      <div class="room-modal-card">
        <div class="room-modal-card">
          <div class="room-modal-image">
            <img :src="getImageUrl(currentRoom.img)" alt="Room Image">
          </div>
          <div class="room-modal-details">
            <h3 class="room-modal-title">
              {{ currentRoom.name }}
            </h3>
            <p class="room-modal-description">{{ currentRoom.description }}</p>
            <div class="characteristics">
              Характеристики:
            </div>
            <div class="room-modal-features" >
            <span
                class="feature"
                v-for="feature in currentRoom.features"
            >
              {{ feature }}
            </span>
            </div>
            <div class="characteristics">
              В стоимость бронирования входит:
            </div>
            <div class="room-modal-features" >
             <span
                 class="feature"
                 v-for="detail in details"
             >
              {{ detail }}
            </span>
            </div>
          </div>
        </div>
        <div>
          <button @click="modal = !modal" class="modal_button">
            <svg id="cross-thin-white" width="25px" height="25px">
              <svg id="cross-thin-base" viewBox="0 0 40 40" fill="#333333">
                <path fill-rule="evenodd" d="M2.493 0L0 2.493 17.507 20 0 37.507 2.493 40 20 22.493 37.507 40 40 37.507 22.493 20 40 2.493 37.507 0 20 17.507 2.493 0z"/>
              </svg>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.characteristics {
  font-size: 20px;
  margin-bottom: 10px;
}

.room-modal-card {
  display: flex;
  max-width: 900px; /* Или другая фиксированная ширина по вашему выбору */
  width: 100%;
  overflow: hidden; /* Обрезает содержимое и фон */
}
.room-modal-image {
  min-width: 300px;
  width: 300px;
}

.room-modal-image img {
  width: 100%; /* Растягивает изображение на всю ширину карточки */
  height: auto; /* Сохраняет пропорции изображения */
  border-radius: 5px;
}

.room-modal-details {
  padding: 15px; /* Отступы внутри блока с деталями */
}

.room-modal-title {
  margin: 0 0 10px 0; /* Отступ снизу для заголовка */
  font-size: 20px; /* Размер шрифта для заголовка */
}

.room-modal-description {
  margin: 0 0 10px 0; /* Отступ снизу для описания */
  color: #666; /* Цвет текста описания */
}

.room-modal-features {
  display: flex; /* Включает горизонтальное выравнивание характеристик */
  flex-wrap: wrap; /* Переносит характеристики на новую строку при необходимости */
}

.room-img {
  border-radius: 5px;
}
.feature {
  background-color: #f0f0f0; /* Фон каждой характеристики */
  padding: 5px 10px; /* Отступы внутри каждой характеристики */
  margin-right: 10px; /* Отступ справа */
  margin-bottom: 10px; /* Отступ снизу */
  border-radius: 5px; /* Скругление углов характеристик */
  font-size: 14px; /* Размер шрифта характеристик */
}

.or {
  font-size: 28px;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: roboto-light,Arial,sans-serif;
  font-weight: 300;
}

.rooms-item img {
  height: auto;
  max-width: 200px;
}

.rooms-block {
  border: 1px solid #F4F5F7;
  padding: 10px;
}

.rooms-button-btn {
  color: #FFF;
  background: #0C9EE4;
  padding: 10px 42px;
  line-height: 1;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
}

.rooms-button-btn svg {
}

.rooms-button-btn:hover {

}

.rooms-button-btn span {
  font-size: 25px;
  font-weight: 500;
}

.rooms-button-info {
  border: 1px solid #B70000;
  color: #B70000;
  padding: 9px 12px;

  position: relative;
  margin-bottom: 11px;
  background-color: #FFF;
  font-size: 14px;
  text-align: center;
  font-family: roboto,Arial,sans-serif;
  font-weight: 400;
}

.rooms-item-img {
  display: flex;
}

.room-occupancy {
  min-width: 81px;
  display: flex;
  justify-content: center;
}

.rooms-buttons {
  max-width: 350px;
  padding: 20px;
  background-color: #F4F5F7;
  text-align: center;
}

.rooms-item {
  display: flex;
  justify-content: space-between;
  max-width: 700px;
  padding-top: 15px;
  margin-top: 7px;
  align-items: center;
}

.rooms-items {
  border-inline-end: none;
}

.rooms-item-desc-title {
  font-size: 17px;
  font-family: roboto-medium,Arial,sans-serif;
}

.rooms-item-desc-text {
  font-size: 13px;
  font-family: roboto,Arial,sans-serif;
}

.rooms-item-desc-text span {
  color: #0C9EE4;
  white-space: nowrap;
  text-decoration: underline;
}

.rooms {

}

.rooms-title {
  font-size: 31px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный фон */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-window {
    background-color: #fff; /* Белый фон для модального окна */
    padding: 20px; /* Отступы внутри модального окна */
    border-radius: 5px; /* Скругление углов модального окна */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Тень для модального окна */
    max-width: 900px; /* Максимальная ширина модального окна */
    width: 90%; /* Ширина модального окна */
    z-index: 1001; /* Убедитесь, что модальное окно находится выше фона */
}

@media (max-width: 767px) {
  .rooms-button-btn span {
    font-size: 20px;
  }

  .rooms-block {
    flex-direction: column;
  }

  .rooms-buttons {
    margin-top: 20px;
    max-width: none;
  }
}

@media (max-width: 600px) {
  .rooms-title {
    text-align: center;
  }
}


@media (max-width: 470px) {
  .rooms-item {
    flex-direction: column;
    border-bottom: 1px solid #c9c7c7;
  }

  .rooms-item-img {
    margin-bottom: 10px;
  }

  .room-occupancy {
    margin-bottom: 10px;
  }
  .rooms-item-desc-title {
    text-align: center;
    margin-bottom: 20px;
  }

  .rooms-item-desc-text {
    margin-bottom: 10px;
  }

}

</style>