<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><span class="bg-warning">G</span> panne</a>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="notification" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                
                            <span class="rounded-pill badge bg-warning">
                                0
                                <span class="visually-hidden">unread messages</span>
                            </span>
                            <i class="fa-solid fa-bell"></i>
                            Notification
            
                    </a>
                    <ul class="dropdown-menu open px-2" aria-labelledby="notification">
                        <li><a class="dropdown-item" href="#">Aucune notification</a></li>
                        <hr>
                        <li>
                            <router-link class="dropdown-item" :to="{ name : 'changePassword' }">Tous les notifications</router-link>
                        </li>
                    </ul> 
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-circle-user"></i>
                        {{ userName }}
                    </a>
                    <ul class="dropdown-menu open" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <router-link class="dropdown-item" :to="{ name : 'changePassword' }">Changer mot de passe</router-link>
                        </li>
                        <li><a class="dropdown-item" href="#" @click="logout">Logout</a></li>
                    </ul>     
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name : 'NavMenue',
    data() {
        return {
            //userName : "user",
        }
    },
    computed : {
        userName() {
            const user = this.$store.getters.getAuth
            if (user)
                return user.fullName
            return "user"
        }
    },
    created () {
        this.getUser()
        
        // userName() {
        //     this.getUser(localStorage.getItem('userId'))
        //     console.log(localStorage.getItem('userId'))
        //     if(this.$store.getters.getUser){
        //         const user = this.$store.getters.getUser
        //         console.log(user)
        //         return user.email
        //     }
        // }
    },
    methods : {
        getUser() {
            let id = localStorage.getItem("userId")
            this.$store.dispatch('setAuth', id)
        },
        logout() {
            this.$store.dispatch("logout")
            this.$router.push({ path : "/"})
        }
    }
}
</script>

<style scoped>

.navbar-brand span {
    display: inline-block;
    padding: 1px 3px 0;
    border-radius: 3px;
}

</style>