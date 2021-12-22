<template>
  <div class="wrapper-fields">
    <label for="name-adress" class="lbl-input">
      Введіть адресу об'єкта оцінки</label
    >
    <input
      ref="autocomplete"
      placeholder="Вулиця, номер будинку, місто, область"
      type="text"
      class="input-field"
      id="address"
    />
  </div>
</template>

<script>
let autocomplete;
export default {
  name: "AutoComplete",
  data() {
    return {};
  },
  mounted() {
    autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */ (this.$refs.autocomplete),
      { types: ["geocode"] }
    );
  },
  methods: {},
};
</script>

<style scoped>
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
</style>