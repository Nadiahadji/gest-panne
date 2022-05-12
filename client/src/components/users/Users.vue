<template>
<div class="container-fluid">
  <h1 class="text-center mb-5">Liste  des Utilisateurs</h1>
  <div class="d-flex justify-content-between mb-3">
    <router-link :to="{ name : 'addUser'}" class="btn btn-info me-auto">
        <i class="fas fa-plus"></i>
      Nouveau utilisateur
    </router-link>
    <input type="text" 
      class="form-control filter" 
      placeholder="Tapez un nom d'utilisateur"
      @change="filterUser">
  </div>
  <table class="table shadow">
      <thead class="table-dark">
          <tr>
              <th>ID</th>
              <th>Utilisateur</th>
              <th>Email</th>
              <th>Privillage</th>
              <th>Etat</th>
              <th>action</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.fullName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td v-if="user.isActive">actif</td>
            <td v-else>inactif</td>
            <td>
                <router-link 
                  :to="{ name : 'updateUser', params : { id : user.id}}"
                  class="btn btn-success btn-sm me-1">
                  Modifier
                </router-link>
                <button 
                  class="btn btn-danger btn-sm"
                >Supprimer
                </button>
            </td>
        </tr>
      </tbody>

  </table>
</div>
</template>

<script>
export default {
    name : 'Users',
    data() {
      return {
        filter : "",
        page : 1
      }
    },
    computed : {
      users() {
        return this.$store.getters.getUsers
      }
    },
    created() {
      this.fetchUsers()
    },
    methods : {
      fetchUsers() {
        this.$store.dispatch("setUsers", {page : this.page, filter : this.filter})
      },
      filterUser(e) {
        this.filter = e.target.value
        this.$store.dispatch("setUsers", {page : this.page, filter : this.filter})
      }
    }
}
</script>

<style scoped>
  .filter {
    width : 15rem;
    border-radius : 5px
  }
</style>