<template>
  <div class="about">
    <!-- nav-panel-site -->
    <HeaderNavigator />

    <h1>Страница с выбранными аналогами</h1>
  </div>
</template>


<script>
import HeaderNavigator from "../components/nav/HeaderNavigation.vue";

export default {
  name: "About",
  components: {
    HeaderNavigator,
  },
  created() {},
  methods: {},
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
</style>
