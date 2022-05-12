<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><span class="bg-warning">G</span> panne</a>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">
                        <i class="fa-solid fa-bell"></i> Notification
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-circle-user"></i>{{ userName }}
                    </a>
                    <ul class="dropdown-menu open" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li><a class="dropdown-item" href="#">Logout</a></li>
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
            userName : "user",
        }
    },
    computed : {
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
        getUser(id) {
            this.$store.dispatch('setUser', id)
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