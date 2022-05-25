<template>
<div v-for="trouble in troubles" :key="trouble.id" class="card">
  <div class="card-header">
    <h5 class="card-title">{{trouble.title}}</h5>
  </div>
  <div class="card-body">
    <p class="card-text">Cree le : {{ trouble.createdAt }} | Par : {{ trouble.user.fullName }}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li v-for="detail in trouble.troubleDetails" :key="detail.id" class="list-group-item">
        <p>{{detail.comment}}</p>
        <p>date : {{detail.createdAt}}</p>
    </li>
  </ul>
</div>
  
</template>

<script>
import axios from 'axios'
export default {
    name : 'TroubleDetail',
    data(){
        return {
            id : "",
            troubles : []
        }
    },
    created() {
        this.id = this.$route.params.id
        axios.get(`http://localhost:3000/api/trouble/${this.id}`)
            .then(res => {
                // this.title = res.data.title
                // this.status = res.data.status
                // this.desc = res.data.desc
                console.log(res.data)
                this.troubles = res.data
            })
            .catch(err => console.log(err))
    },
}
</script>

<style scoped>
.card-header {
    background-color : var(--bs-orange)
}
</style>>
