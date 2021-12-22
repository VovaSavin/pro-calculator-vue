<template>
  <div class="all-calculator">
    <div class="navigator">
      <!-- nav-panel-site -->
      <HeaderNavigator />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 wrapper-form">
          <form action="#" method="post" class="w-75">
            <div class="wrapper-fields">
              <label for="name-project" class="lbl-input"
                >Введіть назву проекту</label
              >
              <input
                type="text"
                name="name-project"
                id="name-project"
                placeholder="Будь-яка назва для обліку у портфелі проектів"
                class="input-field"
              />
            </div>
            <div class="wrapper-fields">
              <label for="name-date" class="lbl-input"
                >Введіть дату оцінки</label
              >
              <input
                type="date"
                name="name-date"
                id="name-date"
                class="input-field"
              />
            </div>
            <!-- auto-complete -->
            <AutoComplete />

            <div class="wrapper-fields">
              <label for="typeBuilding" class="lbl-input">
                Оберіть клас будинку
              </label>
              <select name="typeBuilding" id="typeBuilding" class="input-field">
                <option value="0">Виберіть зі списку</option>
                <option v-for="type in buildTypes" :key="type.value" value="">
                  {{ type.text }}
                </option>
              </select>
            </div>
            <div class="wrapper-fields">
              <label for="typeFloor" class="lbl-input">
                Оберіть кількість поверхів у будинку
              </label>
              <select name="typeFloor" id="typeFloor" class="input-field">
                <option value="0">Виберіть зі списку</option>
                <option
                  v-for="floor in floorType"
                  :key="floor.value"
                  v-bind:value="floor.value"
                >
                  {{ floor.text }}
                </option>
              </select>
            </div>
            <div class="wrapper-fields">
              <label for="currentFloor" class="lbl-input">
                Оберіть поверх розташування квартири
              </label>
              <select name="currentFloor" id="currentFloor" class="input-field">
                <option value="0">Виберіть зі списку</option>
                <option
                  v-for="floor in floorCurrentBuildings"
                  :key="floor.value"
                  v-bind:value="floor.value"
                >
                  {{ floor.text }}
                </option>
              </select>
            </div>
            <div class="wrapper-fields">
              <label for="currentFloor" class="lbl-input">
                Оберіть кількість кімнат
              </label>
              <select name="currentFloor" id="currentFloor" class="input-field">
                <option value="0">Виберіть зі списку</option>
                <option
                  v-for="room in roomCount"
                  :key="room.value"
                  v-bind:value="room.value"
                >
                  {{ room.text }}
                </option>
              </select>
            </div>
            <div class="wrapper-fields">
              <label for="currentFloor" class="lbl-input">
                Введіть загальну площу квартири, м2
              </label>
              <input
                type="text"
                name="sq-all"
                id="sq-all"
                class="input-field"
                placeholder="000.0"
              />
            </div>
            <div class="wrapper-fields">
              <label for="currentFloor" class="lbl-input">
                Введіть житлову площу квартири, м2
              </label>
              <input
                type="text"
                name="sq-flat"
                id="sq-all"
                class="input-field"
                placeholder="000.0"
              />
            </div>
            <div class="wrapper-fields">
              <label for="currentFloor" class="lbl-input">
                Введіть площу кухні квартири, м2
              </label>
              <input
                type="text"
                name="sq-kitchen"
                id="sq-all"
                class="input-field"
                placeholder="000.0"
              />
            </div>
            <div class="wrapper-fields">
              <label for="currentFloor" class="lbl-input">
                Оберіть тип ремонту
              </label>
              <select name="currentFloor" id="currentFloor" class="input-field">
                <option value="0">Виберіть зі списку</option>
                <option
                  v-for="renovation in renovationsType"
                  :key="renovation.value"
                  v-bind:value="renovation.value"
                >
                  {{ renovation.text }}
                </option>
              </select>
            </div>
            <div class="wrapper-fields">
              <label for="currentFloor" class="lbl-input">
                Оберіть тип планування
              </label>
              <select name="currentFloor" id="currentFloor" class="input-field">
                <option value="0">Виберіть зі списку</option>
                <option
                  v-for="layout in layoutsType"
                  :key="layout.value"
                  v-bind:value="layout.value"
                >
                  {{ layout.text }}
                </option>
              </select>
            </div>
            <div class="next-step-btn">
              <a
                href="#"
                class="
                  u-btn
                  u-btn-submit
                  u-button-style
                  u-text-hover-custom-color-5
                  u-text-white
                  u-btn-1
                "
              >
                Наступний Етап<br />
              </a>
            </div>
          </form>
        </div>
        <div class="col-6 p-3">
          <MapInitial />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MapInitial from "../components/initial/MapInitial.vue";
import HeaderNavigator from "../components/nav/HeaderNavigation.vue";
import AutoComplete from "../components/autocomplete/AutoComplete.vue";

import {
  buildingTypes,
  floors,
  rooms,
  layouts,
  renovations,
} from "../assets/data";

export default {
  name: "CalculatorField",
  components: {
    HeaderNavigator,
    AutoComplete,
    MapInitial,
  },
  data() {
    return {
      maxFloors: null,
      buildTypes: buildingTypes(),
      floorType: floors(33),
      floorCurrentBuildings: floors(20),
      roomCount: rooms(),
      layoutsType: layouts(),
      renovationsType: renovations(),
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
body {
  line-height: 1.6;
}

.navigator {
  z-index: 200;
  padding-top: 0.1px;
  position: sticky;
}
.previous {
  margin-left: 1rem;
}
.next {
  margin-right: 1rem;
}
.wrapper-form {
  display: flex;
  flex-direction: row-reverse;
}
.wrapper-fields {
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
}
.input-field {
  width: 100%;
  height: 45px;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.4);
  border-color: #b3b3b3;
  border-width: 1px;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  padding: 10px 12px;
}
.lbl-input {
  font-size: 1rem;
  text-align: left;
  font-weight: normal;
  font-family: Roboto, sans-serif;
  padding-bottom: 0.25rem;
}
/* Кнопка на следущий этап */
.u-text-white,
a.u-button-style.u-text-white,
a.u-button-style.u-text-white[class*="u-border-"] {
  color: #ffffff !important;
  font-size: 18px;
  font-weight: bold;
}
.u-section-1 .u-btn-1 {
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.4);
}
.u-form-horizontal .u-btn-submit,
.u-form-vertical .u-btn-submit {
  margin-top: 1px;
  margin-bottom: 1px;
  position: relative;
}
.u-btn {
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-image: linear-gradient(#1f646b, #009688);
}
.u-text-white,
a.u-button-style.u-text-white:hover {
  color: rgb(253, 183, 78) !important;
}
.u-btn-submit {
  display: inline-block;
}
.u-btn {
  display: inline-block;
  display: table;
  cursor: pointer;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  font-style: inherit;
  font-weight: inherit;
  text-decoration: none;
  border: 0 none transparent;
  outline-width: 0;
  background-color: transparent;
  margin: 0;
  margin-top: 0px;
  margin-bottom: 0px;
  -webkit-text-decoration-skip: objects;
  font-style: initial;
  white-space: nowrap;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  text-align: center;
  padding: 10px 30px;
  border-radius: 0;
  align-self: flex-start;
}
.next-step-btn {
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 4rem;
}
</style>