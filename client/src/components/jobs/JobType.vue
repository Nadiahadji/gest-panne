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
                    <option selected="true" disabled="disabled" value="">Choisir une panne</option>
                    <option v-for="trouble in troubles" 
                    :key="trouble.id" 
                    :value="trouble.id">{{ trouble.title }}</option>    
                </select>
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
            userId : 1,
            trouble: "",
            troubles : []
        }
    },
    created() {
        axios("http://localhost:3000/api/standby-trouble").then(res => {
            console.log(res.data)
            this.troubles = res.data
        }).catch(err => console.log(err))
    },
    methods : {
        handleSubmit() {
            axios.post("http://localhost:3000/api/new-job", {
                title : this.title,
                desc: this.desc,
                userId : this.userId,
                troubleId : +this.trouble
            }).then((res) => {

                axios.put(`http://localhost:3000/api/update-trouble/${+this.trouble}`, {
                    status : "En reparation"
                }).then((res) => {
                    console.log(res.data)
                }).catch(err => console.log(err))
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