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
              <th>Actif</th>
              <th>action</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.fullName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>
              <input type="checkbox" :checked="user.isActive" @click="toggleStatus(user.isActive, user.id)"/>
              </td>
            <td>
                <router-link 
                  :to="{ name : 'updateUser', params : { id : user.id}}"
                  class="btn btn-success btn-sm me-1">
                  Modifier
                </router-link>
            </td>
        </tr>
      </tbody>

  </table>
</div>
<div class="mt-5">
  <PaginationMenu :totalPages="totalUsers" 
                  v-if="totalUsers > 1"
                  @currentPage="fetchPage"
  />
</div>
</template>

<script>

import axios from 'axios'

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
      },
      totalUsers() {
        const pages = Math.ceil(this.$store.getters.totalUsers / 8)
        return pages
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
      },
      fetchPage(num) {
        console.log("num page : " + num)
        this.$store.dispatch("setUsers", {page : num, filter : this.filter})
      },
      toggleStatus(status, id) {
        axios.put(`http://localhost:3000/api/update-user/${id}`, {
          isActive : !status
        })
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