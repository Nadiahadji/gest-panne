<template>
    
    <ul class="menu-sidebar bg-dark">
      <li>
        <router-link :to="{name : 'admin' }" class="active" @click="active">
          <i class="fa-solid fa-house"></i>
          Dashboard
        </router-link>
      </li>
      <li>
        <router-link :to="{ name : 'allSites' }" class="item" @click="active">
        <i class="fa-solid fa-sitemap"></i> 
        Sites
        </router-link>
      </li>
      <li>
        <a href="#" @click="active">
          <i class="fa-solid fa-desktop"></i>
          Equipements
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-solid fa-ban"></i>
          Pannes
        </a>
      </li>
      <li>
        <a href="">
          <i class="fa-solid fa-briefcase"></i>
          Travaux
        </a>
      </li>                                     
    </ul> 
</template>

<script>
export default {
    name : "AsideMenu",
    methods : {
      active(e) {
        const item = document.querySelectorAll("li a")
        item.forEach(element => {
          element.classList.remove("active")
        });
        console.log(e.target.classList.add("active"))
      }
    }
}
</script>

<style scoped>
  .menu-sidebar {
    position: relative;
    width: 240px;
    height: 100%;
    padding: 3rem 0;
  }

li {
  list-style-type: none;
  width: 100%;
}

li a {
  text-decoration: none;
  color : #fff;
  display : block;
  cursor: pointer;
  padding: 2rem 1rem;
}

li a.active {
  background-color: var(--bs-orange);
}

li a:hover {
  background-color: var(--bs-orange);
}

li a i {
  display: inline-block;
  margin-right: 1rem;
}
</style>