<template>
  <div id="outer-map">
    <div id="map" class="my-map"></div>
  </div>
</template>

<script>
import { pngMarkers, addOrDelete, setSelector } from "../assets/data";
let allMarkers = [];
let allCheckedMarkers = [];
let greenListMarkers = [];
let map;

export default {
  name: "NewGeo",
  props: {
    setMarkers: Array,
    markersChecked: Array,
    objects: Array,
    len: Array,
  },
  data() {
    return {
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 100,
      },
      markers: [],
      paramToHome: null,
      hover: null,
      leave: null,
      functionSetMarkers: null,
      mapHome: null,
      allMarkersHome: null,
    };
  },
  created() {
    this.markers = this.setMarkers;
    this.transferToHome(this.deleteMarkers);
    this.transferToHover(this.hoverMouse2);
    this.transferToLeave(this.leaveMouse2);
    this.transferSetterMarker(this.fooFilteredMarkers);
  },
  mounted() {
    // Получене карты
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 50.48390937836492, lng: 30.40906215445835 },
      zoom: 14,
    });
    // Получение координат пользователя
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          map.setCenter({
            lat: 50.407418859120504,
            lng: 30.62591672833,
          });
          const myMrk = new google.maps.Marker({
            position: pos,
            map,
            title: "You!",
            icon: pngMarkers().you,
          });
        },
        () => {
          handleLocationError(true, map.getCenter());
        }
      );
    }
    // Вызов функций при создании карты
    // Прстановка маркеров в начале
    this.addAnalogMarkers(map, this.markers, allMarkers);
    // Прослушивание клика на маркер
    this.markerClickAnother();
  },
  methods: {
    transferSetterMarker(fooSetMrk) {
      // Переносит функцию простановки маркеров в Home.vue
      this.functionSetMarkers = fooSetMrk;
      this.$emit("setFooMrk", fooSetMrk);
    },
    transferToHover(paramHover) {
      // Переносит функцию "hoverMouse2" в Home.vue
      this.hover = paramHover;
      this.$emit("hover", paramHover);
    },
    transferToLeave(paramLeave) {
      // Переносит функцию "leaveMouse2" в Home.vue
      this.leave = paramLeave;
      this.$emit("leave", paramLeave);
    },
    fooFilteredMarkers() {
      // Убирает маркеры, аналогов которых нет на странице
      allMarkers.forEach((element) => {
        if (this.len.includes(element.title.trim()) === false) {
          element.setMap(null);
        }
        if (this.len.includes(element.title.trim())) {
          element.setMap(map);
        }
      });
    },
    leaveMouse2(obj) {
      // Возвращает красный маркер на карту
      allMarkers.forEach((x) => {
        if (!obj.checked) {
          if (
            x.title.trim() === obj.full_address.trim() &&
            x.title.trim() === greenListMarkers[0].title.trim()
          ) {
            x.setMap(map);
            greenListMarkers[0].setMap(null);
            greenListMarkers = [];
          }
        }
      });
    },
    hoverMouse2(obj) {
      // Меняет красный маркер на зелёный на карте
      allMarkers.forEach((x) => {
        if (x.title.trim() === obj.full_address.trim() && !obj.checked) {
          let pos = x.position;
          let ttl = x.title;
          let ico = pngMarkers().greenChecked;
          x.setMap(null);
          let mrk = new google.maps.Marker({
            position: pos,
            map,
            title: ttl,
            icon: ico,
          });
          greenListMarkers.push(mrk);
        }
      });
    },
    markerClickAnother() {
      // Меняет цвет аддреса в списке аналогов по клику на маркер на карте v.2
      // Подбирает маркеры к каждому адрессу
      allMarkers.forEach((element) => {
        element.addListener("click", () => {
          for (let x = 0; x < this.getAddres()[0].length; x++) {
            setSelector(this.getAddres());
            if (
              this.getAddres()[0][x].innerHTML.trim() === element.title.trim()
            ) {
              if (this.getAddres()[0][x].classList[2] === "active_get_on_map") {
                addOrDelete(this.getAddres(), false, x);
              } else {
                addOrDelete(this.getAddres(), true, x);
              }
            }
          }
        });
      });
    },
    transferToHome(param) {
      // Передаёт функцию удаления маркеров в родительский компонент
      this.paramToHome = param;
      this.$emit("clickDelete", param);
    },
    deleteMarkers() {
      // Удаляет выбранные маркеры, заменяя их на синие
      // В зависимости от того сколько аналогов отображено на страцице
      // Применима так же к отфильторваным аналогам
      for (let i = 0; i < allMarkers.length; i++) {
        this.objects.forEach((element) => {
          if (element.checked && allMarkers[i].title == element.full_address) {
            allMarkers[i].setMap(null);
          } else if (
            !element.checked &&
            allMarkers[i].title == element.full_address
          ) {
            if (this.objects.length > this.len.length) {
              this.len.forEach((y) => {
                if (y === allMarkers[i].title.trim()) {
                  allMarkers[i].setMap(map);
                }
              });
            } else {
              allMarkers[i].setMap(map);
            }
          }
        });
      }
      this.addCheckAnalogMarkers(
        map,
        this.markersChecked,
        allCheckedMarkers,
        pngMarkers().blueChecked
      );
      if (allCheckedMarkers.length > 0) {
        for (let x = 0; x < allCheckedMarkers.length; x++) {
          this.objects.forEach((element) => {
            if (
              element.checked &&
              allCheckedMarkers[x].title == element.full_address
            ) {
              allCheckedMarkers[x].setMap(map);
            } else if (
              !element.checked &&
              allCheckedMarkers[x].title == element.full_address
            ) {
              allCheckedMarkers[x].setMap(null);
            }
          });
        }
      }
    },
    addCheckAnalogMarkers(map, list, insertedList, icon = null) {
      // Выставляет на кaрту отмеченые маркеры аналогов
      list.forEach((element) => {
        const mrk = new google.maps.Marker({
          position: element.positions,
          map,
          title: element.fullAddress.trim(),
          icon: icon,
        });
        insertedList.push(mrk);
      });
    },
    addAnalogMarkers(map, list, insertedList) {
      // Выставляет на кaрту маркеры аналогов
      list.forEach((element) => {
        if (this.len.includes(element.fullAddress.trim())) {
          const mrk = new google.maps.Marker({
            position: element.positions,
            map,
            title: element.fullAddress.trim(),
          });
          insertedList.push(mrk);
        }
      });
    },
    getAddres() {
      // Собирает списки обьектов полей аналогов со страницы
      let allAddress = document.querySelectorAll(".analogs_address");
      let allDistance = document.querySelectorAll(".analogs_distance");
      let allLinks = document.querySelectorAll(".analogs_link");
      let allTypes = document.querySelectorAll(".analogs_type_b");
      let allWalls = document.querySelectorAll(".analogs_wall");
      let allRooms = document.querySelectorAll(".analogs_rooms");
      let allSquares = document.querySelectorAll(".analogs_square");
      let allFloors = document.querySelectorAll(".analogs_floor");
      let allPrices = document.querySelectorAll(".analogs_price_m2");
      let allFullPrices = document.querySelectorAll(".analogs_full_price");
      let listAngs = [
        allAddress,
        allDistance,
        allLinks,
        allTypes,
        allWalls,
        allRooms,
        allSquares,
        allFloors,
        allPrices,
        allFullPrices,
      ];
      return listAngs;
    },
  },
  computed: {},
};
</script>

<style scoped>
#outer-map {
  position: sticky;
  top: 5px;
}
.my-map {
  width: 100%;
  height: 100vh;
}
</style>