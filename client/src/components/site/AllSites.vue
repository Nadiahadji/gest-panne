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
          <tr v-for="site, index in filterSites" :key="site.id">
            <td>{{ ((page * 8)- 8 ) + index + 1}}</td>
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
                  data-bs-toggle="modal" 
                  data-bs-target="#Modal"
                >Supprimer
                </button>
                <!-- Modal -->
<div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalConfirmation">Confirmation</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Voulez vous vraiment supprimer {{ site.site_name }}?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">annuler</button>
        <button type="button"
                class="btn btn-primary" 
                data-bs-dismiss="modal"
                @click="deleteSite(site.id)"
        >Supprimer</button>
      </div>
    </div>
  </div>
</div>
            </td>
        </tr>
      </tbody>

  </table>
</div>
<div class="mt-5">
  <PaginationMenu :totalPages="totalSites" 
                  v-if="totalSites > 1"
                  @currentPage="fetchPage"
  />
</div>

</template>

<script>
import axios from 'axios'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
export default {
    name : 'AllSites',
    data() {
      return {
        filter : "",
        page: 1,
      }
    },
    computed :{
      filterSites() {
        const sites = this.$store.getters.sites
        return sites
      },
      totalSites() {
        const items = this.$store.getters.totalSites
        console.log("total des sites : " + items)
        const total = Math.ceil(items / 8)
        return total
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
        this.$store.dispatch("loadSites", {page : this.page, filter : this.filter})
      },
      filterBySite(e) {
        this.filter = e.target.value
        this.$store.dispatch("loadSites", {page : 1, filter : e.target.value})
      },
      deleteSite(id) {
        axios.delete(`http://localhost:3000/api/delete-site/${id}`)
        this.fetchSites()
      },
      fetchPage(num) {
        this.page = num
        this.$store.dispatch("loadSites", {page : num, filter : this.filter})
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