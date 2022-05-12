<template>
    
    <ul class="menu-sidebar bg-dark">
      <li>
        <router-link :to="{name : 'admin' }" class="active" @click="active">
          <i class="fa-solid fa-house"></i>
          Dashboard
        </router-link>
      </li>
      <li>
        <router-link :to="{ name : 'allSites' }" @click="active">
        <i class="fa-solid fa-sitemap"></i> 
        Sites
        </router-link>
      </li>
      <li>
        <router-link :to="{ name : 'equipements' }" @click="active">
          <i class="fa-solid fa-desktop"></i>
          Equipements
        </router-link>
      </li>
      <li>
        <router-link :to="{ name : 'troubles'}">
          <i class="fa-solid fa-ban"></i>
          Pannes
        </router-link>
      </li>
      <li>
        <router-link :to="{ name : 'jobs' }">
          <i class="fa-solid fa-briefcase"></i>
          Travaux
        </router-link>
      </li>
      <li>
        <router-link :to="{name : 'users' }" @click="active">
          <i class="fa-solid fa-users"></i>
          Utilisateurs
        </router-link>
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
        e.target.classList.toggle("active")
      }
    }
}
</script>

<style scoped>
  .menu-sidebar {
    position: fixed;
    width: 240px;
    height: 100%;
    padding: 2rem 0;
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