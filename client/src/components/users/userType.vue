<template>
    <h1 class="text-center mb-5">Nouveau utilisateur</h1>
    <form @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label class="form-label">Nom d'utilisateur</label>
            <input
                type="text"
                class="form-control"
                v-model="fullName">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input 
                type="text" 
                class="form-control" 
                id="email"
                v-model="email">
            </div>
            <div class="mb-3">
            <label for="password" class="form-label">Mot de passe</label>
            <input 
                type="password" 
                class="form-control" 
                id="password"
                v-model="password">
            </div>
            <div class="mb-3">
                <label for="rule" class="form-label">Fonction</label>
                <select id="rule" v-model="rule">
                    <option value="admin">admin</option>
                    <option value="helpdesk">Technicien</option>
                    <option value="user">Operateur</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="status" class="form-label">Etat</label>
                <input type="checkbox" v-model="isActive"> Active
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
            fullName : "",
            email : "",
            password : "",
            rule : "",
            isActive : ""
        }
    },
    methods : {
        handleSubmit() {
            console.log("test")
            axios.post("http://localhost:3000/api/new-user", {
                fullName : this.fullName,
                email : this.email,
                password : this.password,
                rule : this.rule,
                isActive : this.isActive
            }).then((res) => {
                console.log(res.data)
                this.$router.push({ name : "users"})
            }).catch(err => console.log("test : " + err))
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