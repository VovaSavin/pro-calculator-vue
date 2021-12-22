<template>
  <div class="home">
    <!-- nav-panel-site -->
    <HeaderNavigator />

    <div class="col-custom">
      <div class="w-100 fields_filter shadow-filters">
        <div class="outer-input-address">
          <div class="outer-addr">
            <p class="fonts mb-0 titles">Вулиця:</p>
            <input
              class="input_address w-100"
              id="addr"
              placeholder="Вулиця..."
              v-model="searchAnalogs"
              @input="getLenAng()"
            />
          </div>
          &#160; &#160;
          <div class="outer-addr">
            <div class="row w-100">
              <p class="fonts titles mb-0 w-100">Відстань:</p>
            </div>
            <!-- distance-range-slider component -->
            <VueRangeSlider
              @minValueDistance="minDistance"
              @maxValueDistance="maxDistance"
              :fooFilterMarkers="getLenAng"
            />
          </div>
          <div class="outer-addr">
            <div class="row">
              <p class="fonts titles mb-0 w-50">Площа:</p>
              <!-- square-range-slider component -->
              <vSquareRangeSlider
                @minValueSquare="minSquare"
                @maxValueSquare="maxSquare"
                :fooFilterMarkers="getLenAng"
              />
            </div>
          </div>
          <div class="outer-addr">
            <div class="row">
              <p class="fonts titles mb-0 w-50">Ціна, м2:</p>
              <!-- price-m2-range-slider component -->
              <vPriceM2RangeSlider
                @minValuePriceM2="minPriceM2"
                @maxValuePriceM2="maxPriceM2"
                :fooFilterMarkers="getLenAng"
              />
            </div>
          </div>
          <div class="outer-addr">
            <div class="row w-100">
              <p class="fonts titles mb-0 w-50">Вартість:</p>
              <!-- fullPrice-range-slider component -->
              <vFullPriceRangeSlider
                @minValueFullPrice="minFullPrice"
                @maxValueFullPrice="maxFullPrice"
                :fooFilterMarkers="getLenAng"
              />
            </div>
          </div>
          <div class="outer-addr">
            <p class="fonts mb-0 titles" style="padding-left: 5px">Кімнати:</p>
            <div class="row_room_filter">
              <div class="mr-2">
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    type="submit"
                    id="one-btn"
                    class="btn btn-outline-secondary"
                    :class="{ btn_room_check_press: oneRoom === true }"
                    @click="hideMarkersForRooms(1)"
                  >
                    1
                  </button>
                  <input
                    type="checkbox"
                    name="one"
                    id="one"
                    v-model="oneRoom"
                  />
                  <button
                    type="submit"
                    id="two-btn"
                    class="btn btn-outline-secondary"
                    :class="{ btn_room_check_press: twoRoom === true }"
                    @click="hideMarkersForRooms(2)"
                  >
                    2
                  </button>
                  <input
                    type="checkbox"
                    name="two"
                    id="two"
                    v-model="twoRoom"
                  />
                  <button
                    type="submit"
                    id="three-btn"
                    class="btn btn-outline-secondary"
                    :class="{ btn_room_check_press: threeRoom === true }"
                    @click="hideMarkersForRooms(3)"
                  >
                    3
                  </button>
                  <input
                    type="checkbox"
                    name="three"
                    id="three"
                    v-model="threeRoom"
                  />
                  <button
                    type="submit"
                    id="four-btn"
                    class="btn btn-outline-secondary w-25"
                    :class="{ btn_room_check_press: fourRoom === true }"
                    @click="hideMarkersForRooms(4)"
                  >
                    4+&#160;
                  </button>
                </div>
                <input
                  type="checkbox"
                  name="four"
                  id="four"
                  v-model="fourRoom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="map-and-analogs">
        <div id="wrapper-map" class="col-4">
          <NewGeo
            :len="len"
            :setMarkers="markers"
            :markersChecked="markersChecked"
            :objects="objects"
            @clickDelete="checkAndDelete"
            @hover="enter"
            @leave="out"
            @setFooMrk="setFilteredMrk"
          />
        </div>
        <div class="col-8 mb-3 shadow">
          <div class="row wrapper_col_fields">
            <div class="col cols_name fonts">
              <p class="pt-4">Позначка</p>
            </div>
            <div class="col cols_1_name fonts">
              <p class="pt-2">
                Відстань, <br />м
                <br />
                <span
                  id="distance-arrow"
                  class="desription_distance"
                  @click="sortDistance"
                >
                  &#8593;
                </span>
                <span>&#160;</span>
                <span
                  id="distance-arrow-reverse"
                  class="desription_distance"
                  @click="sortDistanceReverse"
                >
                  &#8595;
                </span>
              </p>
            </div>
            <div class="col-2 cols_name fonts">
              <p class="mt-2">Адреса<br />аналогічних<br />об'єктів</p>
            </div>
            <div class="col cols_1_name fonts">
              <p class="pt-4">Сайт</p>
            </div>
            <div class="col-2 cols_name fonts">
              <p class="pt-4">Клас будівлі</p>
            </div>
            <div class="col-1 cols_1_name fonts">
              <p class="pt-4">Тип стін</p>
            </div>
            <div class="col cols_name fonts">
              <p class="pt-2">
                К-ть<br />кімнат
                <br />
                <span
                  id="room-arrow"
                  class="desription_distance"
                  @click="sortRoom"
                >
                  &#8593;
                </span>
                <span>&#160;</span>
                <span
                  id="room-arrow-reverse"
                  class="desription_distance"
                  @click="sortRoomReverse"
                >
                  &#8595;
                </span>
              </p>
            </div>
            <div class="col cols_1_name fonts">
              <p class="pt-2">
                Площа,<br />м2
                <br />
                <span id="sq-arrow" class="desription_distance" @click="sortSq">
                  &#8593;
                </span>
                <span>&#160;</span>
                <span
                  id="sq-arrow-reverse"
                  class="desription_distance"
                  @click="sortSqReverse"
                >
                  &#8595;
                </span>
              </p>
            </div>
            <div class="col cols_name fonts">
              <p class="pt-4">
                Поверх
                <br />
                <span
                  id="floor-arrow"
                  class="desription_distance"
                  @click="sortFloor"
                >
                  &#8593;
                </span>
                <span>&#160;</span>
                <span
                  id="floor-arrow-reverse"
                  class="desription_distance"
                  @click="sortFloorReverse"
                >
                  &#8595;
                </span>
              </p>
            </div>
            <div class="col cols_1_name fonts">
              <p class="pt-2">
                Ціна,<br />Usd/м2
                <br />
                <span
                  id="price-arrow"
                  class="desription_distance"
                  @click="sortPrice"
                >
                  &#8593;
                </span>
                <span>&#160;</span>
                <span
                  id="price-arrow-reverse"
                  class="desription_distance"
                  @click="sortPriceReverse"
                >
                  &#8595;
                </span>
              </p>
            </div>
            <div class="col-1 cols_name fonts">
              <p class="pt-4">
                Вартість
                <br />
                <span
                  id="fullPrice-arrow"
                  class="desription_distance"
                  @click="sortFullPrice"
                >
                  &#8593;
                </span>
                <span>&#160;</span>
                <span
                  id="fullPrice-arrow-reverse"
                  class="desription_distance"
                  @click="sortFullPriceReverse"
                >
                  &#8595;
                </span>
              </p>
            </div>
          </div>

          <div
            v-for="obj in searchAddressAnalogs"
            :key="obj.id"
            class="row wrapper_col"
          >
            <div class="col cols fonts">
              <p
                class="pt-3 analogs"
                :class="{ active_full_address: obj.checked === true }"
              >
                <input
                  type="checkbox"
                  v-model="obj.checked"
                  @change="clc(obj)"
                  class="check-analog"
                />
              </p>
            </div>
            <div class="col cols_1 fonts">
              <p
                class="pt-3 analogs_distance"
                :class="{ active_full_address: obj.checked === true }"
              >
                {{ obj.distance }}
              </p>
            </div>
            <div class="col-2 cols fonts">
              <p
                @mouseenter="runHover(obj)"
                @mouseleave="runLeave(obj)"
                class="pt-2 analogs_address"
                :class="{ active_full_address: obj.checked === true }"
              >
                {{ obj.full_address }}
              </p>
            </div>
            <div class="col cols_1 fonts">
              <p
                class="pt-3 analogs_link"
                :class="{ active_full_address: obj.checked === true }"
              >
                <a href="#">
                  {{ obj.link }}
                </a>
              </p>
            </div>
            <div class="col-2 cols fonts">
              <p
                class="pt-3 analogs_type_b"
                :class="{ active_full_address: obj.checked === true }"
              >
                {{ obj.type_b }}
              </p>
            </div>
            <div class="col-1 cols_1 fonts">
              <p
                class="pt-3 analogs_wall"
                :class="{ active_full_address: obj.checked === true }"
              >
                {{ obj.wall }}
              </p>
            </div>
            <div class="col cols fonts">
              <p
                class="pt-3 analogs_rooms"
                :class="{ active_full_address: obj.checked === true }"
              >
                {{ obj.rooms }}
              </p>
            </div>
            <div class="col cols_1 fonts">
              <p
                class="pt-3 analogs_square"
                :class="{ active_full_address: obj.checked === true }"
              >
                {{ obj.square }}
              </p>
            </div>
            <div class="col cols fonts">
              <p
                class="pt-3 analogs_floor"
                :class="{ active_full_address: obj.checked === true }"
              >
                {{ obj.floor }}
              </p>
            </div>
            <div class="col cols_1 fonts">
              <p
                class="pt-3 analogs_price_m2"
                :class="{ active_full_address: obj.checked === true }"
              >
                {{ obj.price_m2 }}
              </p>
            </div>
            <div class="col-1 cols fonts">
              <p
                class="pt-3 analogs_full_price"
                :class="{ active_full_address: obj.checked === true }"
              >
                {{ obj.full_price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NewGeo from "../components/NewGeo";
import VueRangeSlider from "../components/VueRangeSlider.vue";
import vSquareRangeSlider from "../components/vSquareRangeSlider.vue";
import vPriceM2RangeSlider from "../components/vPriceM2RangeSlider.vue";
import vFullPriceRangeSlider from "../components/vFullPriceRangeSlider.vue";
import HeaderNavigator from "../components/nav/HeaderNavigation.vue";
import { objects, appendList, generateMaxListRooms } from "../assets/data";

export default {
  name: "Home",
  components: {
    HeaderNavigator,
    NewGeo,
    VueRangeSlider,
    vSquareRangeSlider,
    vPriceM2RangeSlider,
    vFullPriceRangeSlider,
  },
  data() {
    return {
      objects: objects,
      markers: [],
      markersChecked: [],
      deletionMarker: null,
      mouseHover: null,
      mouseLeave: null,
      searchAnalogs: "",
      distanceCurrentValueMin: Function,
      distanceCurrentValueMax: Function,
      squareCurrentValueMin: Function,
      squareCurrentValueMax: Function,
      priceM2CurrentValueMin: Function,
      priceM2CurrentValueMax: Function,
      fullPriceCurrentValueMin: Function,
      fullPriceCurrentValueMax: Function,
      len: [],
      filteredMrk: Function,
      oneRoom: false,
      twoRoom: false,
      threeRoom: false,
      fourRoom: false,
      checkedRooms: generateMaxListRooms(),
      alterCheckedRooms: [],
    };
  },
  created() {
    this.setAllMarkers();
    this.loadComponent();
    this.listenResizeWidth();
  },
  methods: {
    instanceActiveLink() {
      document
        .querySelector("#correct-analogs")
        .classList.remove("active-link");
      document.querySelector("#choose-analogs").classList.add("active-link");
    },
    async loadComponent() {
      this.createAddressList()
        .then(() => {
          this.afterResize();
        })
        .then(() => {
          this.instanceActiveLink();
        });
    },
    listenResizeWidth() {
      // Прослушивает изменения окна браузера
      window.addEventListener("resize", this.afterResize);
    },
    afterResize() {
      // Реагирует на изменение окна браузера
      if (document.documentElement.clientWidth < 840) {
        document.querySelector(".home").style.width = "840px";
      } else {
        document.querySelector(".home").style.width = "100%";
      }
      if (document.documentElement.clientWidth < 1160) {
        document.querySelector(".map-and-analogs").style.flexDirection =
          "column";
        document.querySelector("#wrapper-map").classList.add("w-100");
        document.querySelector(".my-map").style.height = "60vh";
        document.querySelector(".shadow").classList.add("w-100");
      } else {
        document.querySelector(".map-and-analogs").style.flexDirection = "row";
        document.querySelector("#wrapper-map").classList.remove("w-100");
        document.querySelector(".my-map").style.height = "100vh";
        document.querySelector(".shadow").classList.remove("w-100");
      }
    },
    hideMarkersForRooms(room) {
      // Прячет маркеры, в зависимости от выбранных комнат
      this.clickRoom(room);
      this.getLenAng();
    },
    clickRoom(room) {
      // Выбирает комнату в фильтре, зависимости от нажатой кнопки и чекбокса
      if (room == 1) {
        this.oneRoom = !this.oneRoom;
      } else if (room == 2) {
        this.twoRoom = !this.twoRoom;
      } else if (room == 3) {
        this.threeRoom = !this.threeRoom;
      } else if (room == 4) {
        this.fourRoom = !this.fourRoom;
      }
      if (this.oneRoom || this.twoRoom || this.threeRoom || this.fourRoom) {
        appendList(this.alterCheckedRooms, room);
        this.checkedRooms = this.alterCheckedRooms;
      } else {
        this.checkedRooms = generateMaxListRooms();
        this.alterCheckedRooms = [];
      }
    },
    async createAddressList() {
      // Наполняет список len адресами аналогов
      this.markers.forEach((element) => {
        this.len.push(element.fullAddress.trim());
      });
    },
    async getLenAng() {
      // Возвращает длину отображаемых обьектов на странице
      return this.setCurrentMarkers()
        .then(() => {
          let temp = document.querySelectorAll(".analogs_address").length;
          for (let x = 0; x < temp; x++) {
            this.len.push(
              document.querySelectorAll(".analogs_address")[x].innerHTML.trim()
            );
          }
        })
        .then(() => this.filteredMrk());
    },
    async setCurrentMarkers() {
      // Очистка списка отображаемых адресов
      this.len = [];
    },
    sortFullPrice() {
      this.checkingColorArrow();
      document.querySelector("#fullPrice-arrow").classList.add("red");
      this.objects = this.sortedObjectsFullPrice;
    },
    sortFullPriceReverse() {
      this.checkingColorArrow();
      document.querySelector("#fullPrice-arrow-reverse").classList.add("red");
      this.objects = this.sortedObjectsFullPriceReverse;
    },
    sortPrice() {
      this.checkingColorArrow();
      document.querySelector("#price-arrow").classList.add("red");
      this.objects = this.sortedObjectsPrice;
    },
    sortPriceReverse() {
      this.checkingColorArrow();
      document.querySelector("#price-arrow-reverse").classList.add("red");
      this.objects = this.sortedObjectsPriceReverse;
    },
    sortFloor() {
      this.checkingColorArrow();
      document.querySelector("#floor-arrow").classList.add("red");
      this.objects = this.sortedObjectsFloor;
    },
    sortFloorReverse() {
      this.checkingColorArrow();
      document.querySelector("#floor-arrow-reverse").classList.add("red");
      this.objects = this.sortedObjectsFloorReverse;
    },
    sortSq() {
      this.checkingColorArrow();
      document.querySelector("#sq-arrow").classList.add("red");
      this.objects = this.sortedObjectsSq;
    },
    sortSqReverse() {
      this.checkingColorArrow();
      document.querySelector("#sq-arrow-reverse").classList.add("red");
      this.objects = this.sortedObjectsSqReverse;
    },
    sortRoom() {
      this.checkingColorArrow();
      document.querySelector("#room-arrow").classList.add("red");
      this.objects = this.sortedObjectsRoom;
    },
    sortRoomReverse() {
      this.checkingColorArrow();
      document.querySelector("#room-arrow-reverse").classList.add("red");
      this.objects = this.sortedObjectsRoomReverse;
    },
    sortDistance() {
      this.checkingColorArrow();
      document.querySelector("#distance-arrow").classList.add("red");
      this.objects = this.sortObjectsDistance;
    },
    sortDistanceReverse() {
      this.checkingColorArrow();
      document.querySelector("#distance-arrow-reverse").classList.add("red");
      this.objects = this.sortObjectsDistanceReverse;
    },
    runHover(obj) {
      this.mouseHover(obj);
    },
    runLeave(obj) {
      this.mouseLeave(obj);
    },
    enter(paramHover) {
      this.mouseHover = paramHover;
    },
    out(paramLeave) {
      this.mouseLeave = paramLeave;
    },
    clc(obj) {
      this.getCoordsAdvert(obj);
      this.deletionMarker();
    },
    checkAndDelete(param) {
      // Принимает функцию удаления маркеров от дочернего компонента
      this.deletionMarker = param;
    },
    minDistance(paramMin) {
      // Минимальное значение ползунка расстояния
      this.distanceCurrentValueMin = paramMin;
    },
    maxDistance(paramMax) {
      // Максимальное значение ползунка расстояния
      this.distanceCurrentValueMax = paramMax;
    },
    minSquare(paramMin) {
      // Минимальное значение ползунка площади
      this.squareCurrentValueMin = paramMin;
    },
    maxSquare(paramMax) {
      // Максимальное значение ползунка площади
      this.squareCurrentValueMax = paramMax;
    },
    minPriceM2(paramMin) {
      // Минимальное значение ползунка цены за кв.м
      this.priceM2CurrentValueMin = paramMin;
    },
    maxPriceM2(paramMax) {
      // Максимальное значение ползунка цены за кв.м
      this.priceM2CurrentValueMax = paramMax;
    },
    minFullPrice(paramMin) {
      // Минимальное значение ползунка цены полной цены
      this.fullPriceCurrentValueMin = paramMin;
    },
    maxFullPrice(paramMax) {
      // Максимальное значение ползунка цены полной цены
      this.fullPriceCurrentValueMax = paramMax;
    },
    setFilteredMrk(fooSetMrk) {
      // Отображение отфильтрованых маркеров на карте
      this.filteredMrk = fooSetMrk;
    },
    getCoordsAdvert(obj) {
      // Добавляет данные в список для отмеченых маркеров
      let listCoords = obj.coords.split(",");
      this.removed = {
        status: obj.checked,
        fullAddress: obj.full_address,
        positions: {
          lat: parseFloat(listCoords[0]),
          lng: parseFloat(listCoords[1]),
        },
      };
      if (obj.checked) {
        this.markersChecked.push(this.removed);
      } else {
        for (let x = 0; x < this.markersChecked.length; x++) {
          if (
            this.markersChecked[x].positions.lng ==
              this.removed.positions.lng &&
            this.markersChecked[x].positions.lat == this.removed.positions.lat
          ) {
            this.markersChecked.splice(
              this.markersChecked.indexOf(this.markersChecked[x]),
              1
            );
          }
        }
      }
    },
    setAllMarkers() {
      // Устанавливает маркеры на карте
      this.markers = [];
      this.objects.forEach((element) => {
        let listCoords = element.coords.split(",");
        if (!element.checked) {
          this.markers.push({
            status: element.checked,
            fullAddress: element.full_address,
            positions: {
              lat: parseFloat(listCoords[0]),
              lng: parseFloat(listCoords[1]),
            },
          });
          return this.markers;
        }
      });
    },
    checkingColorArrow() {
      // Прoверяет и удаляет цвет стрелки
      let arrows = document.querySelectorAll(".desription_distance");
      arrows.forEach((arr) => {
        if (arr.classList[1] == "red") {
          arr.classList.remove("red");
        }
      });
    },
  },
  computed: {
    sortedObjectsFullPrice: function () {
      function distanceCompare(a, b) {
        if (a.full_price < b.full_price) {
          return -1;
        }
        if (a.full_price > b.full_price) {
          return 1;
        }
        return 0;
      }
      return this.objects.sort(distanceCompare);
    },
    sortedObjectsFullPriceReverse: function () {
      this.objects = this.sortedObjectsFullPrice;
      return this.objects.reverse();
    },
    sortedObjectsPrice: function () {
      function distanceCompare(a, b) {
        if (a.price_m2 < b.price_m2) {
          return -1;
        }
        if (a.price_m2 > b.price_m2) {
          return 1;
        }
        return 0;
      }
      return this.objects.sort(distanceCompare);
    },
    sortedObjectsPriceReverse: function () {
      this.objects = this.sortedObjectsPrice;
      return this.objects.reverse();
    },
    sortedObjectsFloor: function () {
      function distanceCompare(a, b) {
        if (a.floor < b.floor) {
          return -1;
        }
        if (a.floor > b.floor) {
          return 1;
        }
        return 0;
      }
      return this.objects.sort(distanceCompare);
    },
    sortedObjectsFloorReverse: function () {
      this.objects = this.sortedObjectsFloor;
      return this.objects.reverse();
    },
    sortedObjectsSq: function () {
      function distanceCompare(a, b) {
        if (a.square < b.square) {
          return -1;
        }
        if (a.square > b.square) {
          return 1;
        }
        return 0;
      }
      return this.objects.sort(distanceCompare);
    },
    sortedObjectsSqReverse: function () {
      this.objects = this.sortedObjectsSq;
      return this.objects.reverse();
    },
    sortedObjectsRoom: function () {
      function distanceCompare(a, b) {
        if (a.rooms < b.rooms) {
          return -1;
        }
        if (a.rooms > b.rooms) {
          return 1;
        }
        return 0;
      }
      return this.objects.sort(distanceCompare);
    },
    sortedObjectsRoomReverse: function () {
      this.objects = this.sortedObjectsRoom;
      return this.objects.reverse();
    },
    sortObjectsDistance: function () {
      // Сортирует по расстоянию к искомому обьекту по возрастанию
      function distanceCompare(a, b) {
        if (a.distance < b.distance) {
          return -1;
        }
        if (a.distance > b.distance) {
          return 1;
        }
        return 0;
      }
      return this.objects.sort(distanceCompare);
    },
    sortObjectsDistanceReverse: function () {
      // Сортирует по расстоянию к искомому обьекту по убыванию
      this.objects = this.sortObjectsDistance;
      return this.objects.reverse();
    },
    sortObjectsId: function () {
      // Сортирует по id
      function idCompare(a, b) {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      }
      return this.objects.sort(idCompare);
    },
    searchAddressAnalogs: function () {
      // Фильтр по адресу, цене, цене_м.кв, площади, комнатности
      return this.objects
        .filter((object) => {
          return object.full_address.indexOf(this.searchAnalogs) > -1;
        })
        .filter((object) => {
          return parseInt(object.distance) >= this.distanceCurrentValueMin();
        })
        .filter((object) => {
          return parseInt(object.distance) <= this.distanceCurrentValueMax();
        })
        .filter((object) => {
          return parseInt(object.square) >= this.squareCurrentValueMin();
        })
        .filter((object) => {
          return parseInt(object.square) <= this.squareCurrentValueMax();
        })
        .filter((object) => {
          return parseInt(object.price_m2) >= this.priceM2CurrentValueMin();
        })
        .filter((object) => {
          return parseInt(object.price_m2) <= this.priceM2CurrentValueMax();
        })
        .filter((object) => {
          return parseInt(object.full_price) >= this.fullPriceCurrentValueMin();
        })
        .filter((object) => {
          return parseInt(object.full_price) <= this.fullPriceCurrentValueMax();
        })
        .filter((object) => {
          return this.checkedRooms.includes(parseInt(object.rooms));
        });
    },
  },
};
</script>

<style scoped>
.navigator {
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
}
.previous {
  margin-left: 1rem;
}
.next {
  margin-right: 1rem;
}
.col-custom {
  display: flex;
  flex-direction: column;
}
.map-and-analogs {
  display: flex;
  flex-direction: row;
}
.btn_room_check_press {
  background-color: #6c757d !important;
  color: aliceblue;
}
.desription_distance {
  cursor: pointer;
}
.shadow,
.shadow-filters {
  z-index: 100;
  box-shadow: -15px 0 20px 1px rgba(82, 76, 76, 0.637) !important;
}
.shadow-filters {
  z-index: 110;
  position: sticky;
  top: 2px;
}
.fields_filter {
  background-color: beige;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
}
/* Поле поиска аддреса */
.outer-addr {
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  flex-wrap: wrap;
  width: 116px;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
}
.input_address {
  font-size: 14px;
  margin-bottom: 5px;
}
.titles {
  text-align: left;
}
/*  */
.titles-width {
  width: 31%;
}
.input_range_row {
  display: flex;
  flex-direction: row;
}
/* ROOMS-FILTERS */
.row_room_filter {
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  justify-content: space-around;
}
#one,
#two,
#three,
#four {
  width: 18px;
  height: 18px;
  display: none;
}
/*  */
.label-filters {
  font-size: 12px;
  margin-right: 0.4rem;
  margin-left: 0.25rem;
}
.check-analog {
  width: 16px;
  height: 16px;
}
.wall-type {
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  margin-top: 0.45rem;
  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
  margin-left: 0.25rem;
}
.outer-input-address {
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-content: space-between;
  margin-left: 0.25rem;
  flex-wrap: wrap;
  width: 100%;
}
.diapazon {
  width: 7%;
}
.label-search {
  display: inline;
  padding-top: 1%;
  font-size: 14px;
  font-weight: bold;
}
.red {
  color: red;
}

/* Полоса диапазона для расстояния */
#range-distance {
  cursor: pointer;
  width: 50%;
}
</style>