import axios from 'axios'

export default {
    login(context, payload) {
        const email = payload.email
        const password = payload.password
        axios.post("http://localhost:3000/api/login", {email : email, password : password})
            .then((res) => {
                const token = res.data.token
                const id = res.data.id
                localStorage.setItem('token', token)
                localStorage.setItem('userId', id)
                context.commit('setAuth', {token : {token, id}}) 
            })
            .catch(err => console.log(err))
    },
    getAuth(context, payload) {
        axios.get(`http://localhost:3000/user/${payload}`)
            .then((res) => {
                user = res.data
                context.commit("setAuth", {user : user})
            })
            .catch((err) => console.log(err))
    },
    logout(context) {
        localStorage.removeItem('token')
        context.commit('setAuth', {token : null, user : null})
    }
}