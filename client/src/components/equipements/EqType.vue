<template>
    <h1 class="text-center mb-5">Nouveau Equipement</h1>
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
            <label for="type" class="form-label">Type</label>
            <input 
                type="text" 
                class="form-control" 
                id="type"
                v-model="type">
            </div>
            <div class="mb-3">
                <label for="site" class="form-label">Site</label>{{site}}
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
       
       <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <img src="" class="rounded me-2" alt="...">
                    <strong class="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios'
import bootstrap from 'bootstrap/dist/js/bootstrap'
export default {
    name : "userType",
    data(){
        return {
            name : "",
            ref : "",
            type : "",
            site : "",
            desc : ""
        }
    },
    methods : {
        handleSubmit() {
            console.log(site)
            axios.post("http://localhost:3000/api/new-equipement", {
                name : this.name,
                ref : +this.ref,
                type : this.type,
                desc: this.desc,
                siteId : +this.site
            }).then((res) => {
                console.log(res.data)
                this.$router.push({ name : "equipements"})
            }).catch(err => console.log(err))
        },
        fetchsites() {
            this.$store.dispatch("loadSites", { page : 1, filter : ""})
        }
    },
    created() {
        this.fetchsites()
    },
    computed : {
        sites() {
            return this.$store.getters.sites
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