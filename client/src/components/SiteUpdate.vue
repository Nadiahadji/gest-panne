<template>
    <h1 class="text-center mb-5">Modifier le site</h1>
    <form @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label for="site" class="form-label">Site</label>
            <input
                type="text"
                class="form-control"
                id="site"
                v-model="site">
        </div>
        <div class="mb-3">
            <label for="location" class="form-label">Localisation</label>
            <input 
                type="text" 
                class="form-control" 
                id="location"
                v-model="location">
            </div>
            <div class="d-grid">
                <button type="submit" class="btn btn-primary">Enregistrer</button>
            </div>
        </form>
</template>

<script>
import axios from 'axios'

export default {
    name : "SiteType",
    data(){
        return {
            id : 2,
            site : "",
            location : ""
        }
    },
    created() {
        this.id = this.$route.params.id
        console.log(this.id)
        axios.get(`http://localhost:3000/api/site/${this.id}`)
            .then(res => {
                this.site = res.data.site_name
                this.location = res.data.site_location
            })
            .catch(err => console.log(err))
    },
    methods : {
        handleSubmit() {                     
            axios.put(`http://localhost:3000/api/edit-site/${this.id}`, {
                name : this.site,
                location : this.location
            }).then(res => {
                console.log(res.data)
                this.$router.push({ name : "allSites"})    
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