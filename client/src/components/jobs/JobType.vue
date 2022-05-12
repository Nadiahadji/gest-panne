<template>
    <h1 class="text-center mb-5">Nouveau Travail</h1>
    <form @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label class="form-label">Titre</label>
            <input
                type="text"
                class="form-control"
                v-model="title">
        </div>
        <div class="mb-3">
            <label for="desc" class="form-label">Desscription</label>
            <textarea
                rows="5"
                class="form-control" 
                id="desc"
                v-model="desc">
            </textarea>
            </div>
            <div class="mb-3">
                <label for="trouble" class="form-label">Pannes</label>
                <select 
                    id="trouble" 
                    class="form-control"
                    v-model="trouble">
                    <option value="3">No network</option>    
                </select>
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
    name : "TroubleType",
    data(){
        return {
            title : "",
            desc : "",
            userId : 1,
            trouble : ""
        }
    },
    methods : {
        handleSubmit() {
            axios.post("http://localhost:3000/api/new-job", {
                title : this.title,
                desc: this.desc,
                userId : this.userId,
                troubleId : +this.trouble
            }).then((res) => {
                console.log(res.data)
                this.$router.push({ name : "jobs"})
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