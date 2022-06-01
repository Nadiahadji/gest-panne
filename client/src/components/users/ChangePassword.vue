<template>
  <h1 class="text-center my-5">Changez votre mot de passe</h1>
  <form @submit.prevent="hendleSubmit">
      <div class="mb-3">
          <label for="password">Nouveau mot de passe</label>
          <input type="password" id="password" v-model="password" class="form-control">
          <small v-if="error.pass" class="text-danger">Entrer mot de passe</small>
      </div>
      <div class="mb-3">
          <label for="confirm">confirmeer mot de passe</label>
          <input type="password" id="confirm" v-model="confirm" class="form-control">
          <small v-if="error.confirm" class="text-danger">confirmer mot de passe</small>
      </div>
      <div class="mb-3 d-grid">
          <button type="submit" id="password" class="btn btn-primary">Enregistreer</button>
      </div>
  </form>


    <div class="toast-container position-fixed top-1 end-0 p-3">
    <div id="liveToast" class="toast text-bg-danger" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
        <i clsss="fa-solid fa-error"></i>
        <strong class="me-auto">Erreur</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            le mot de passe n4est pas confirmer
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

export default {
    name : "ChangePassword",
    data() {
        return {
            password : "",
            confirm : "",
            error : [],
        }
    },
    methods : {
        hendleSubmit() {
            this.error = []
            if(!this.password) {
                this.error.pass = true
                return
            }
            if(!this.confirm) {
                this.error.confirm = true
                return
            }
            if(this.password != this.confirm) {
                const toast = new bootstrap.Toast('.toast', {
                    delay : 5000
                })
                toast.show()
                return
            }
            const id = localStorage.getItem("userId")
            axios.put(`http://localhost:3000/api/update-user/${id}`, {
                password : this.password
            }).then(res => this.$router.push({ name : "troubles"}))
            .catch(err => console.log(err))
        }
    }
}
</script>

<style>
    form {
        width: 180px;
        margin: auto;
    }
</style>