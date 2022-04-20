<template>
<div class="contaner-fluid">
  <h1 class="text-center mb-5">Liste  des Sites</h1>
    <router-link :to="{ name : 'addSite'}" class="btn btn-info me-auto mb-2">
        <i class="fas fa-plus"></i>
      Nouveau site
    </router-link>
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
          <tr v-for="site in sites" :key="site.id">
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
        sites : []
      }
    },
    created() {
      axios.get("http://localhost:3000/api/sites")
        .then(res => {
          console.log(res.data)
          this.sites = res.data
        })
        .catch(err => console.log(err))
    },
    methods : {
      deleteSite(id) {
        axios.delete(`http://localhost:3000/api/delete-site/${id}`)
          .then(res => console.log(res.data))
          .catch(err => console.log(err))
      }
    }
}
</script>

<style>

</style>