<template>
  <div class="to-slider-distance">
    <div>
      <input class="w-50 sizes" type="text" v-model="barMinValue" />
      <input class="w-50 sizes" type="text" v-model="barMaxValue" />
    </div>
    <div class="range-slider w-100">
      <MultiRangeSlider
        :min="0"
        :max="cMax"
        :step="10"
        :ruler="false"
        :label="false"
        :minValue="barMinValue"
        :maxValue="barMaxValue"
        @input="UpdateValues"
      />
    </div>
  </div>
</template>
<script>
import MultiRangeSlider from "multi-range-slider-vue";
import { maxValues } from "../assets/data";

export default {
  name: "VueRangeComponent",
  props: {
    fooFilterMarkers: Function,
  },
  data() {
    return {
      valueSecond: null,
      valueFirst: null,
      barMin: 0,
      barMax: maxValues("distance"),
      barMinValue: 0,
      barMaxValue: maxValues("distance"),
      cMax: maxValues("distance"),
      barMinValueTransfer: null,
      barMaxValueTransfer: null,
    };
  },
  created() {
    this.transferMin(this.getMin);
    this.transferMax(this.getMax);
  },
  methods: {
    UpdateValues(e) {
      this.barMinValue = e.minValue;
      this.barMaxValue = e.maxValue;
      this.fooFilterMarkers();
    },
    transferMin(paramMin) {
      // Переносит MIN значаение в Home.vue
      this.barMinValueTransfer = paramMin;
      this.$emit("minValueDistance", paramMin);
    },
    transferMax(paramMax) {
      // Переносит MAX значаение в Home.vue
      this.barMaxValueTransfer = paramMax;
      this.$emit("maxValueDistance", paramMax);
    },
    getMin() {
      // Возвращает минимальное значение ползунка
      return this.barMinValue;
    },
    getMax() {
      // Возвращает максимальное значение ползунка
      return this.barMaxValue;
    },
  },
  components: {
    MultiRangeSlider,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.to-slider-distance {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.app-content {
  padding: 40px 15px;
}
/* Стили ползунков */
.multi-range-slider {
  border: none;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  padding-top: 3px;
  padding-right: 8px;
}
.multi-range-slider .bar-left {
  width: 25%;
  background-color: #f0f0f0;
  box-shadow: none !important;
  padding: 4px 0px;
}
.sizes {
  font-size: 14px;
}
</style>
