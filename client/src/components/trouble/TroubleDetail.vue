<template>
<div class="container-fluid">
<h1 class="text-center my-3">Detail de la panne</h1>
<div class="mb-3">
  <form class="row align-items-center" @submit.prevent="handleSubmit">
    <div class="col-11">
       <input v-model="comment" type="text" class="form-control" id="comment" placeholder="Ecrire une description ...">
    </div>

    <div class="col-1">
      <button type="submit" class="btn btn-primary">Ajouter</button>
    </div>

  </form>
</div>
<div v-for="trouble in troubles" :key="trouble.id" class="card">
  <div class="card-header">
    <h5 class="card-title">{{trouble.title}}</h5>
    <p class="card-text">Cree le : {{ trouble.createdAt }} | Par : {{ trouble.user.fullName }}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li v-for="detail in trouble.troubleDetails" :key="detail.id" class="list-group-item">
        <div class="row">
          <div class="col-3">
            <p>{{detail.createdAt}}</p>
          </div>
          <div class="col-9">
            <p>{{detail.comment}}</p>
          </div>
        </div>
    </li>
  </ul>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name : 'TroubleDetail',
    data(){
        return {
            id : "",
            comment : "",
            troubles : []
        }
    },
    created() {
        this.fetchTroubleDetail()
    },
    methods : {
      fetchTroubleDetail() {
        this.id = this.$route.params.id
        axios.get(`http://localhost:3000/api/trouble/${this.id}`)
            .then(res => {
                this.troubles = res.data
            })
            .catch(err => console.log(err))
      },
      handleSubmit() {
        axios.post(`http://localhost:3000/api/troubleDetail`, {
              troubleId : this.troubles[0].id,
              desc : this.comment
            })
            .then(() => {
                this.fetchTroubleDetail()
            })
            .catch(err => console.log(err))
      }
  }
}
</script>

<style scoped>
.card-header {
    background-color : var(--bs-orange)
}
</style>>
