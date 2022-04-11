<template>
    
    <ul class="menu-sidebar bg-dark">
      <li>
        <a href="#" class="active">
          <i class="fa-solid fa-house"></i>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#">
        <i class="fa-solid fa-sitemap"></i> 
        Sites
        </a>
      </li>
      <li>
        <a href="#">
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
    name : "AsideMenu"
}
</script>

<style scoped>
  .menu-sidebar {
    position: fixed;
    top: 57px;
    left: 0;
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