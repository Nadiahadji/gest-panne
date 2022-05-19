<template>
<div class="container-fluid">
  <h1 class="text-center mb-5">Liste  des Eauipements</h1>
  <div class="d-flex justify-content-between mb-3">
    <router-link :to="{ name : 'addEquip'}" class="btn btn-info me-auto">
        <i class="fas fa-plus"></i>
      Nouveau equipement
    </router-link>
    <input type="text" 
      class="form-control filter" 
      placeholder="Rechercher par equipment ..."
      @change="filterEquipement">
  </div>
  <table class="table shadow">
      <thead class="table-dark">
          <tr>
              <th>ID</th>
              <th>Ref.</th>
              <th>Equipement</th>
              <th>Description</th>
              <th>type</th>
              <th>site</th>
              <th>action</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="e in equipements" :key="e.id">
            <td>{{ e.id }}</td>
            <td>{{ e.Mid }}</td>
            <td>{{ e.name }}</td>
            <td>{{ e.desc }}</td>
            <td>{{ e.eq_type }}</td>
            <td>{{ e.site.site_name }}</td>
            <td>
                <router-link 
                  :to="{ name : 'editEquip', params : {id : e.id}}"
                  class="btn btn-success btn-sm me-1">
                  Modifier
                </router-link>
                <button
                  @click="deleteEq(e.id)" 
                  class="btn btn-danger btn-sm"
                >Supprimer
                </button>
            </td>
        </tr>
      </tbody>

  </table>
</div>
<div class="mt-5">
  <PaginationMenu :totalPages="totalEq" 
                  v-if="totalEq > 1"
                  @currentPage="fetchPage"
  />
</div>
</template>

<script>
export default {
    name : 'Equipements',
    data() {
      return {
        filter : "",
        page : 1
      }
    },
    computed : {
      equipements() {
        return this.$store.getters.getEquipements
      },
      totalEq() {
        const pages = Math.ceil(this.$store.getters.totalEq)
        return pages
      }
    },
    created() {
      this.fetchEquipements()
    },
    methods : {
      
      fetchEquipements() {
        this.$store.dispatch("loadEquipements", {page : this.page, filter : this.filter})
      },
      filterEquipement(e) {
        this.filter = e.target.value
        console.log(this.filter)
        this.$store.dispatch("loadEquipements", {page : this.page, filter : this.filter})
      },
      deleteEq(id) {
          this.$store.dispatch("deleteEq", id)
          this.$store.dispatch("loadEquipements", {page : this.page, filter : this.filter})
      },
      fetchPage(num) {
        console.log("num page : " + num)
        this.$store.dispatch("loadEquipements", {page : num, filter : this.filter})
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