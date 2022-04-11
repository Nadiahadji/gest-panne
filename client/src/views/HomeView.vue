<template>
  <nav>
    <router-link to="/">Home</router-link> | 
    <router-link to="/about">About</router-link>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col-md-8 text-center position-relative">
        <img alt="intro image" src="../assets/intro-1.svg">
        <h2 class="text-black-50">Gerer vos pannes d'une seule interface</h2>
      </div>
      <div class="col-md-4">
        <login-type/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import LoginType from '@/components/LoginType.vue'

export default {
  name: 'HomeView',
  components: {
    LoginType
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

h2 {
    font-family: "Indie Flower";
    font-size : 1.5 rem;
    position: absolute;
    bottom: .5rem;
    left : 0;
    z-index: 9;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.6),
    0 0 4px rgba(0, 0, 0, 0.6),
    0 0 4px rgba(0, 0, 0, 0.6);
}

.container {
  min-height: 100%;
}
.row {
  height: 100%;
  align-items: center;
}
nav {
  padding: 30px;
  margin-left: auto;
  width : fit-content
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

img {
  width: 100%;
  height :100%
}
</style>