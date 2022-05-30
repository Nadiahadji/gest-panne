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
        <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
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
                >
                <div v-if="isLoading" class="spinner-border spinner-border-sm text-white" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                Connexion
                </button>
        </div>
    </form>

    <div class="toast-container position-fixed top-0 end-0 p-3">
    <div id="liveToast" class="toast text-bg-danger" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
        <i clsss="fas fa-error"></i>
        <strong class="me-auto">Erreur</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
        verifier votre email ou mot de passe sinon contactew votre admin
        </div>
    </div>
    </div>

</template>

<script>
import axios from 'axios'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

export default {
    name : 'Login',
    data() {
        return {
            email : "",
            password : "",
            errors : {},
            isLoading : false
        }
    },
    methods : {
        async handleSubmit() {
            const email = this.email
            const password = this.password
            this.errors = []
            if(!this.email){
                this.errors.email = "Entrer une addresse mail valide"
            }
            if(!this.errors.email && !this.errors.password) {
                this.isLoading = true
                this.$store.dispatch("login", {password : password, email : email})
                    .then(() => {
                        if(!this.$store.getters.getAuth) {
                            console.log(":error")
                            const toastEl = document.querySelector('.toast')
                            const toast = new bootstrap.Toast(toastEl, {
                                delay : 7000
                            })
                            toast.show()
                            return 
                        }

                        this.$store.dispatch("setAuth", localStorage.getItem("userId"))
                    })
                    .then(() => {
                        this.isLoading = false
                        this.$router.push({name : "admin"})
                    })
                    .catch(err => console.log("error : " + err))
            }
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

