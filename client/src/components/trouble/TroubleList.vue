<template>
<div class="container-fluid">
  <h1 class="text-center mb-5">Liste  des Pannes</h1>
  <div class="d-flex justify-content-between mb-3">
    <router-link :to="{ name : 'addPanne'}" class="btn btn-info me-auto">
        <i class="fas fa-plus"></i>
      Signaler une panne
    </router-link>
    <input type="text" 
      class="form-control filter" 
      placeholder="Rechercher par panne ..."
      @change="filterTrouble">
  </div>
  <table class="table shadow">
      <thead class="table-dark">
          <tr>
              <th>ID</th>
              <th>title</th>
              <th>Status</th>
              <th>Cree par</th>
              <th>Date</th>
              <th>action</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="trouble in troubles" :key="trouble.id">
            <td>{{ trouble.id }}</td>
            <td>{{ trouble.title }}</td>
            <td>{{ trouble.status }}</td>
            <td v-if="!!trouble.user">{{ trouble.user.fullName }}</td>
            <td v-else> - </td>
            <td>{{ trouble.createdAt }}</td>
            <td>
                <router-link 
                  :to="{ name : 'detailPanne', params : {id : trouble.id}}"
                  class="btn btn-primary btn-sm me-1">
                  Detail
                </router-link>
                <router-link 
                  :to="{ name : 'editPanne', params : {id : trouble.id}}"
                  class="btn btn-success btn-sm me-1">
                  Modifier
                </router-link>
                <button
                  @click="deleteTrouble(trouble.id)" 
                  class="btn btn-danger btn-sm"
                >Supprimer
                </button>
            </td>
        </tr>
      </tbody>

  </table>
</div>
<div class="mt-5">
  <PaginationMenu :totalPages="totalTroubles" 
                  v-if="totalTroubles > 1"
                  @currentPage="fetchPage"
  />
</div>
</template>

<script>
export default {
    name : 'TroubleList',
    data() {
      return {
        filter : "",
        page : 1
      }
    },
    computed : {
      troubles() {
        console.log(this.$store.getters.getTroubles)
        return this.$store.getters.getTroubles
      },
      totalTroubles() {
        const pages = Math.ceil(this.$store.getters.totalTroubles)
      }
    },
    created() {
      this.fetchTroubles()
      
    },
    methods : {
      
      fetchTroubles() {
        this.$store.dispatch("loadTroubles", {page : this.page, filter : this.filter})
        
      },
      filterTrouble(e) {
        this.filter = e.target.value
        console.log(this.filter)
        this.$store.dispatch("loadTroubles", {page : this.page, filter : this.filter})
        
      },
      deleteTrouble(id) {
          this.$store.dispatch("deleteTrouble", id)
          this.$store.dispatch("loadTroubles", {page : this.page, filter : this.filter})
      },
      fetchPage(num) {
        console.log("num page : " + num)
        this.$store.dispatch("loadTroubles", {page : num, filter : this.filter})
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