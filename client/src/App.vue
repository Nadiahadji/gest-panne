<template>

        
  <nav-menu />
  <div class="d-flex">
    <div class="side-menu">
      <aside-menu />
    </div>
    <div class="content mt-3">
      <div class="container">
        <router-view/>
      </div>
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
  width : 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}

</style>
