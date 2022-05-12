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
            <label for="desc" class="form-label">Description</label>
            <textarea
                rows="5"
                class="form-control" 
                id="ref"
                v-model="desc">
            </textarea>
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

export default {
    name : "TroubleUpdate",
    data(){
        return {
            id : "",
            title : "",
            desc : "",
            status : "",
            options : ["En attente", "En reparatio", "resolu"]
        }
    },
    created() {
        this.id = this.$route.params.id
        axios.get(`http://localhost:3000/api/trouble/${this.id}`)
            .then(res => {
                this.title = res.data.title
                this.status = res.data.status
                this.desc = res.data.desc
            })
            .catch(err => console.log(err))
    },
    methods : {
        handleSubmit() {                    
            axios.put(`http://localhost:3000/api/update-trouble/${this.id}`, {
                title : this.title,
                desc : this.desc,
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