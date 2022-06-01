<template>
    <h1 class="text-center mb-5">Modifier l'equipement</h1>
    <form @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label class="form-label">Equipemet</label>
            <input
                type="text"
                class="form-control"
                v-model="name">
        </div>
        <div class="mb-3">
            <label for="ref" class="form-label">Ref</label>
            <input 
                type="text" 
                class="form-control" 
                id="ref"
                v-model="ref">
            </div>
            <div class="mb-3">
            <label for="type" class="form-label">Type</label>{{type.h}}
            <select
                class="form-control" 
                id="type"
                v-model="type">
                <option v-for="option, index  in options" :key="index">{{option}}</option>
            </select>
            </div>
            <div class="mb-3">
                <label for="site" class="form-label">Site</label>
                <select id="site" v-model="site" class="form-control">
                    <option v-for="s in sites" :key="s.id" :value="s.id">{{ s.site_name}}</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="desc" class="form-label">Description</label>
                <textarea class="form-control" v-model="desc" rows="5"></textarea>
            </div>
            <div class="d-grid">
                <button type="submit" class="btn btn-primary">Enregistrer</button>
            </div>
        </form>
</template>
<script>
import axios from 'axios'

export default {
    name : "EqUpdate",
    data(){
        return {
            id : "",
            name : "",
            ref : "",
            type : "",
            site : "",
            desc : "",
            options : ["Hardware", "Software"]
        }
    },computed: {
        sites() {
            console.log(this.$store.getters.sites)
            return this.$store.getters.sites
        }
    },
    created() {
        this.id = this.$route.params.id
        this.fetchSites()
        axios.get(`http://localhost:3000/api/equipement/${this.id}`)
            .then(res => {
                console.log(res.data)
                this.name = res.data.name
                this.type = res.data.eq_type
                this.ref = res.data.Mid
                this.site = res.data.siteId
                this.desc = res.data.desc
            })
            .catch(err => console.log(err))
    },
    methods : {
        handleSubmit() {                     
            axios.put(`http://localhost:3000/api/update-equipement/${this.id}`, {
                name : this.name,
                ref : this.ref,
                type : this.type,
                desc: this.desc,
                siteId : this.site
            }).then(res => {
                console.log(res.data)
                this.$router.push({ name : "equipements"})    
            })
            .catch(err => console.log(err))
        },
        fetchSites() {
            this.$store.dispatch("loadSites", {page : 1, filter : ""})
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
