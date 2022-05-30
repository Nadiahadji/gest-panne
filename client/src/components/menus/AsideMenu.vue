<template>
    
    <ul class="menu-sidebar bg-dark">
      <li v-if="rule === 'admin'">
        <router-link :to="{name : 'statistic' }" class="side-menu">
          <i class="fa-solid fa-house"></i>
          Dashboard
        </router-link>
      </li>
      <li v-if="rule === 'admin'">
        <router-link class="side-menu" :to="{ name : 'allSites' }">
        <i class="fa-solid fa-sitemap"></i> 
        Sites
        </router-link>
      </li>
      <li v-if="rule === 'admin'">
        <router-link :to="{ name : 'equipements' }">
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
      <li v-if="rule === 'admin' || rule === 'helpdesk'">
        <router-link :to="{ name : 'jobs' }">
          <i class="fa-solid fa-briefcase"></i>
          Travaux
        </router-link>
      </li>
      <li v-if="rule === 'admin'">
        <router-link :to="{name : 'users' }">
          <i class="fa-solid fa-users"></i>
          Utilisateurs
        </router-link>
      </li>                                     
    </ul> 
</template>

<script>
export default {
    name : "AsideMenu",
    data() {
      return {
        rule : ""
      }
    },
    async created() {
      let id = localStorage.getItem("userId")
      await this.$store.dispatch('setAuth', id)
      const user = this.$store.getters.getAuth
      this.rule = user.role
    },
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

li .router-link-active {
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