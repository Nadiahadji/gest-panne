<template>
    <h1 class="text-center mb-5">Nouvelle Panne</h1>
    <form @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label class="form-label">Titre</label>
            <input
                type="text"
                class="form-control"
                v-model="title">
        </div>
        <div class="mb-3">
            <label for="desc" class="form-label">Description</label>
            <textarea
                rows="5"
                class="form-control" 
                id="desc"
                v-model="desc">
            </textarea>
            </div>
            
            <div class="d-grid">
                <button type="submit" class="btn btn-primary">Enregistrer</button>
            </div>
        </form>
</template>

<script>
import axios from 'axios'
import bootstrap from 'bootstrap/dist/js/bootstrap'
export default {
    name : "TroubleType",
    data(){
        return {
            title : "",
            desc : "",
            userId : 1
        }
    },
    methods : {
        handleSubmit() {
            axios.post("http://localhost:3000/api/new-trouble", {
                title : this.title,
                desc: this.desc,
                userId : localStorage.getItem("userId")
            }).then((res) => {
                console.log(res.data)
                this.$router.push({ name : "troubles"})
            }).catch(err => console.log(err))
        },
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