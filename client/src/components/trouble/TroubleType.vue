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
            <div class="mb-3">
            <label for="equipement" class="form-label">Ref. Equipement</label>
            <select class="form-control" id="equipement" v-model="equipement">
                <option v-for="e in equipements" :key="e.id" :value="e.id">{{ e.Mid }} - {{ e.name }}</option>
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
            equipement : "",
            equipements : []
        }
    },
    methods : {
        handleSubmit() {
            axios.post("http://localhost:3000/api/new-trouble", {
                title : this.title,
                desc: this.desc,
                userId : localStorage.getItem("userId"),
                eId: this.equipement
            }).then((res) => {
                console.log(res.data)
                this.$router.push({ name : "troubles"})
            }).catch(err => console.log(err))
        },
    },
    created() {
        axios.get("http://localhost:3000/api/equipements", {
            limit : 0
        }).then((res) => {
            this.equipements = res.data.rows
            console.log(this.equipements)
        }).catch(err => console.log(err))
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