<template>
  <div id="outer-map">
    <div id="map" class="my-map"></div>
  </div>
</template>

<script>
let map;

export default {
  name: "MapInitial",
  props: {},
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
  created() {},
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
          });
        },
        () => {
          handleLocationError(true, map.getCenter());
        }
      );
    }
  },
  methods: {},
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
  height: 45vh;
}
</style>