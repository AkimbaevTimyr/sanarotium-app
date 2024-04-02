<script setup>

</script>

<template>
  <div class="materials">
    <div class="wrapper">
      <div class="materials_title">
        Новые материалы в блоге
      </div>
      <div class="materials_items">
        <div class="materials_item">
          <div class="materials_item_img">
            <img src="../assets/materials.png" alt="materials"/>
          </div>
          <div class="materials_item_info">
            <div class="materials_item_title">
              <a href="#" class="link">
                Трансфер из Германии в Чехию
              </a>
            </div>
            <div class="materials_item_desc">
              Возможность получить БЕСПЛАТНЫЙ трансфер от дверей вашего дома в любом городе Германии до дверей санатория в Карловых Варах, Франтишковых Лазнях или...
            </div>
            <div class="materials_item_tags">
              <div class="materials_item_tag">
                <a href="#">
                  Статьи
                </a>
              </div>
              <div class="materials_item_tag">
                <a href="#">
                  Полезное
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="materials_item">
          <div class="materials_item_img">
            <img src="../assets/materials.png" alt="materials"/>
          </div>
          <div class="materials_item_info">
            <div class="materials_item_title">
              <a href="#" class="link">
                Трансфер из Германии в Чехию
              </a>
            </div>
            <div class="materials_item_desc">
              Возможность получить БЕСПЛАТНЫЙ трансфер от дверей вашего дома в любом городе Германии до дверей санатория в Карловых Варах, Франтишковых Лазнях или...
            </div>
            <div class="materials_item_tags">
              <div class="materials_item_tag">
                <a href="#">
                  Статьи
                </a>
              </div>
              <div class="materials_item_tag">
                <a href="#">
                  Полезное
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="materials_item">
          <div class="materials_item_img">
            <img src="../assets/materials.png" alt="materials"/>
          </div>
          <div class="materials_item_info">
            <div class="materials_item_title">
              <a href="#" class="link">
                Трансфер из Германии в Чехию
              </a>
            </div>
            <div class="materials_item_desc">
              Возможность получить БЕСПЛАТНЫЙ трансфер от дверей вашего дома в любом городе Германии до дверей санатория в Карловых Варах, Франтишковых Лазнях или...
            </div>
            <div class="materials_item_tags">
              <div class="materials_item_tag">
                <a href="#">
                  Статьи
                </a>
              </div>
              <div class="materials_item_tag">
                <a href="#">
                  Полезное
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="materials_item">
          <div class="materials_item_img">
            <img src="../assets/materials.png" alt="materials"/>
          </div>
          <div class="materials_item_info">
            <div class="materials_item_title">
              <a href="#" class="link">
                Трансфер из Германии в Чехию
              </a>
            </div>
            <div class="materials_item_desc">
              Возможность получить БЕСПЛАТНЫЙ трансфер от дверей вашего дома в любом городе Германии до дверей санатория в Карловых Варах, Франтишковых Лазнях или...
            </div>
            <div class="materials_item_tags">
              <div class="materials_item_tag">
                <a href="#">
                  Статьи
                </a>
              </div>
              <div class="materials_item_tag">
                <a href="#">
                  Полезное
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.materials_item_tag {
  margin-right: 10px;
  background-color: #F6F6F6;
  padding: 5px;
  font-size: 13px;
  color: #3DB921;
  margin-inline-end: 10px;
  font-family: roboto-medium,Arial,sans-serif;
}

.materials_item_tag a {
  font-weight: 400;
}

.materials_item_tags {
  display: flex;
}

.materials_item_desc {
  font-size: 13px;
  text-align: start;
}

.materials_item_title {
  font-size: 22px;
  font-weight: 500;
  color: #0C9EE4;
  text-decoration: none;
  outline: 0!important;
}

.materials_item_info {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 25px;
}

.materials_item_img {
  width: 100%;
  max-width: 156px;
}

.materials_item {
  display: flex;
  flex: 1 0 590px;
  justify-content: space-between;
  margin: 30px 25px;
}

.materials_items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.materials_title {
  font-size: 1.875em;
  text-align: center;
  margin-bottom: 30px;
}

@media (max-width: 600px) {
  .materials_item {
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
    justify-content: center;
    flex: 1 0 300px;
  }

  .materials_item_title {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 20px;
  }

  .materials_item_desc {
    width: 300px;
    text-align: center;
    margin-bottom: 20px;
  }

  .materials_item_tags {
    justify-content: center;
  }
}
</style>