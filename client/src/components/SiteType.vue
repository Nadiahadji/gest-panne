<template>
    <h1 class="text-center mb-5">site</h1>
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
    name : "SiteType",
    data(){
        return {
            site : "",
            location : ""
        }
    },
    methods : {
        handleSubmit() {
            console.log(this.site)
            axios.post("http://localhost:3000/api/new-site", {
                name : this.site,
                location : this.location
            }).then(res => {
                console.log(res.data)
                
                
                var toastLiveExample = document.getElementById('liveToast')
                var toast = new bootstrap.Toast(toastLiveExample)

                toast.show()

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