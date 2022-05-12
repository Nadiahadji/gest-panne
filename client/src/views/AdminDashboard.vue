<template>
  <NavMenu />
  <AsideMenu />
    <div class="content mt-3">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
      <!-- /.container-fluid-->


</template>

<script>

export default {
    name : "AdminDashboard",
    components : {
        
    }
}
</script>

<style scoped>

</style>