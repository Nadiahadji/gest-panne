<template>     
  <nav-menu />
  <aside-menu />
  <div class="content mt-3">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>

import NavMenu from '@/components/NavMenu.vue'
import AsideMenu from '@/components/AsideMenu.vue'
export default {
  components : {
    AsideMenu,
    NavMenu
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
}

.content {
  width : calc(100% - 240px);
  height: 100%;
  margin-left: 240px
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}

</style>
