<template>
<div class="container-fluid">
  <h1 class="text-center mb-5">Liste  des Travaux</h1>
  <div class="d-flex justify-content-between mb-3">
    <router-link :to="{ name : 'addJob'}" class="btn btn-info me-auto">
        <i class="fas fa-plus"></i>
      Lancer un travail
    </router-link>
    <input type="text" 
      class="form-control filter" 
      placeholder="Rechercher par panne ..."
      @change="filterJob">
  </div>
  <table class="table shadow">
      <thead class="table-dark">
          <tr>
              <th>ID</th>
              <th>title</th>
              <th>Description</th>
              <th>Panne</th>
              <th>Intervenant</th>
              <th>Date</th>
              <th>action</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="job in jobs" :key="job.id">
            <td>{{ job.id }}</td>
            <td>{{ job.title }}</td>
            <td>{{ job.desc }}</td>
            <td>{{ job.trouble.title }}</td>
            <td>{{ job.user.fullName }}</td>
            <td>{{ job.createdAt }}</td>
            <td>
                <router-link 
                  :to="{ name : 'editJob', params : {id : job.id}}"
                  class="btn btn-success btn-sm me-1">
                  Modifier
                </router-link>
                <button
                  @click="deleteJob(job.id)" 
                  class="btn btn-danger btn-sm"
                >Supprimer
                </button>
            </td>
        </tr>
      </tbody>

  </table>
</div>
<div class="mt-5">
  <PaginationMenu :totalPages="totalJobs" 
                  v-if="totalJobs > 1"
                  @currentPage="fetchPage"
  />
</div>
</template>

<script>
export default {
    name : 'JobList',
    data() {
      return {
        filter : "",
        page : 1
      }
    },
    computed : {
      jobs() {
        console.log(this.$store.getters.getJobs)
        return this.$store.getters.getJobs
      },
      totalJobs() {
        const pages = Math.ceil(this.$store.getters.totalJobs)
        return pages
      }
    },
    created() {
      this.fetchJobs()
    },
    methods : {
      
      fetchJobs() {
        this.$store.dispatch("loadJobs", {page : this.page, filter : this.filter})
      },
      filterJob(e) {
        this.filter = e.target.value
        this.$store.dispatch("loadJobs", {page : this.page, filter : this.filter})
      },
      deleteJob(id) {
          this.$store.dispatch("deleteJob", id)
          this.$store.dispatch("loadJobs", {page : this.page, filter : this.filter})
      },
      fetchPage(num) {
        console.log("num page : " + num)
        this.$store.dispatch("loadJobs", {page : num, filter : this.filter})
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