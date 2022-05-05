<template>
<div class="container-fluid">
  <h1 class="text-center mb-5">Liste  des Sites</h1>
  <div class="d-flex justify-content-between mb-3">
    <router-link :to="{ name : 'addSite'}" class="btn btn-info me-auto">
        <i class="fas fa-plus"></i>
      Nouveau site
    </router-link>
    <input type="text" @change="filterBySite" class="form-control filter" placeholder="Tapez un nom du site">
  </div>
  <table class="table shadow">
      <thead class="table-dark">
          <tr>
              <th>ID</th>
              <th>Site</th>
              <th>Localisation</th>
              <th>action</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="site in filterSites" :key="site.id">
            <td>{{ site.id }}</td>
            <td>{{ site.site_name }}</td>
            <td>{{ site.site_location }}</td>
            <td>
                <router-link 
                  :to="{ name : 'updateSite', params : {id : site.id}}" 
                  class="btn btn-success btn-sm me-1">
                  Modifier
                </router-link>
                <button 
                  class="btn btn-danger btn-sm"
                  @click="deleteSite(site.id)"
                >Supprimer
                </button>
            </td>
        </tr>
      </tbody>

  </table>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name : 'AllSites',
    data() {
      return {
        sites : [],
        filter : "",
        page: 1
      }
    },
    computed :{
      filterSites() {
        return this.$store.getters.sites
      }
    },
    created() {
      this.fetchSites()
      // axios.get("http://localhost:3000/api/sites")
      //   .then(res => {
      //     console.log(res.data)
      //     this.sites = res.data
      //   })
      //   .catch(err => console.log(err))
    },
    methods : {
      fetchSites() {
        this.$store.dispatch("loadSites", {page : 1, filter : this.filter})
      },
      filterBySite(e) {
        this.filter = e.target.value
        this.$store.dispatch("loadSites", {page : 1, filter : e.target.value})
      },
      deleteSite(id) {
          this.$store.dispatch("deleteSite", id)
          this.$store.dispatch("loadSites", {page : this.page, filter : this.filter})
      //   axios.delete(`http://localhost:3000/api/delete-site/${id}`)
      //     .then(res => this.fetchSites())
      //     .catch(err => console.log(err))
      }
    }
}
</script>

<style scoped>
  .filter {
    width : 12rem;
    border-radius : 5px
  }
</style>