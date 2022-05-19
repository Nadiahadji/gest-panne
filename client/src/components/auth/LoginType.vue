<template>
    <form @submit.prevent="handleSubmit">
        <div class="mb-5 text-center text-black-50">
            <i class="fas fa-user-lock fa-6x"></i>
        </div>
        <div class="mb-3">
            <label class="form-label">E-mail</label>
            <input type="email" 
                v-model="email"
                class="form-control form-control-lg"  
                placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label class="form-label">Mot de passe</label>
            <input type="password" 
                class="form-control form-control-lg" 
                v-model="password"
                placeholder="mot de passe">
        </div>
        <div class="d-grid">
            <button type="submit"
                class="btn btn-primary form-control form-control-lg"
                >Connexion
                </button>
        </div>
    </form>
</template>

<script>
import axios from 'axios'
import User from '@/util/User.js'

export default {
    name : 'Login',
    data() {
        return {
            email : "",
            password : ""
        }
    },
    methods : {
        handleSubmit() {
            this.$store.dispatch("login", {password : this.password, email : this.email})
                .then(() => {
                    this.$router.push({name : "admin"})
                })
                .catch(err => console.log(err))
            // axios.post("http://localhost:3000/api/login", {
            //     email : this.email,
            //     password : this.password
            // })
            // .then(res => {
            //     localStorage.setItem('token', res.data.token)
            //     //if(User.responseAfterLogin(res))
            //     this.$router.push({ name : 'admin'})
            // })
            // .catch(err => console.log(err.status))
        }
    }
}
</script>

<style scoped>

</style>>

