<template>
  <div class="stick-up">
    <div class="u-sheet">
      <header
        class="d-flex justify-content-center py-3 navigator u-header u-sticky"
      >
        <nav class="u-menu">
          <ul class="nav nav-pills u-nav-1 u-nav">
            <li class="nav-item u-nav-item">
              <a
                href="/calculator"
                class="nav-link my-navigation-link"
                aria-current="page"
                id="exodus-data"
              >
                Вихідні дані
              </a>
            </li>
            <li class="nav-item u-nav-item">
              <a
                href="/"
                class="nav-link my-navigation-link"
                id="choose-analogs"
              >
                Підбір аналогів
              </a>
            </li>
            <li class="nav-item u-nav-item">
              <a
                href="/about"
                class="nav-link my-navigation-link"
                id="correct-analogs"
                >Коригування</a
              >
            </li>
            <li class="nav-item u-nav-item">
              <a href="#" class="nav-link my-navigation-link">Результат</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNavigation",
};
</script>

<style scoped>
.navigator {
  z-index: 20;
  padding-top: 0.1px;
  position: sticky;
}
.my-navigation-link {
  padding: 10px 0px;
  text-shadow: 2px 2px 8px rgba(128, 128, 128, 0.5);
  color: #009688;
}
.my-navigation-link:hover {
  color: #f44336;
}

.u-nav-item {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  padding: 0;
  margin: 0;
  margin-right: 1.5rem;
  height: 100%;
}
.u-nav-1 {
  font-size: 1rem;
  letter-spacing: 0px;
  font-weight: 700;
  text-transform: uppercase;
}
.u-nav {
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}
.u-menu {
  display: table;
  white-space: nowrap;
  position: relative;
  line-height: 1;
  opacity: 1;
}
.u-header .u-sheet-1 {
  min-height: 80px;
}
.u-sheet {
  position: relative;
  margin: 0 auto;
}
.u-header.u-sticky {
  z-index: 20;
  padding-top: 0.1px;
}
.u-header.u-sticky {
  position: sticky;
}
.u-header.u-sticky {
  top: 0;
}
.u-header {
  background-image: none;
}
</style>