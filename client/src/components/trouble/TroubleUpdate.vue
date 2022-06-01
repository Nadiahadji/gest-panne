<template>
    <h1 class="text-center mb-5">Modifier la panne</h1>
    <form @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label class="form-label">Titre</label>
            <input
                type="text"
                class="form-control"
                v-model="title">
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Status</label>
            <select
                class="form-control" 
                id="status"
                v-model="status">
                <option v-for="option, index  in options" :key="index">{{option}}</option>
            </select>
            </div>
            <div class="d-grid">
                <button type="submit" class="btn btn-primary">Enregistrer</button>
            </div>
        </form>
       
</template>
<script>
import axios from 'axios'

export default {
    name : "TroubleUpdate",
    data(){
        return {
            id : "",
            title : "",
            status : "",
            options : ["En attente", "En reparation", "resolu"]
        }
    },
    created() {
        this.id = this.$route.params.id
        axios.get(`http://localhost:3000/api/trouble/${this.id}`)
            .then(res => {
                this.title = res.data[0].title
                this.status = res.data[0].status
            })
            .catch(err => console.log(err))
    },
    methods : {
        handleSubmit() {  
            console.log(this.status)                  
            axios.put(`http://localhost:3000/api/update-trouble/${this.id}`, {
                title : this.title,
                status : this.status,
            }).then(res => {
                console.log(res.data)
                this.$router.push({ name : "troubles"})    
            })
            .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>
form {
    width : 40%;
    height: 100%;
    margin: 1rem auto;
}
</style>