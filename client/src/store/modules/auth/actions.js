import axios from 'axios'

export default {
    login(context, payload) {
        const email = payload.email
        const password = payload.password
        axios.post("http://localhost:3000/api/login", {email : email, password : password})
            .then((res) => {
                const token = res.data.token
                localStorage.setItem('token', token)
                context.commit('setAuth', {token : {token, id : res.data.id}}) 
            })
            .catch(err => console.log(err))
    },
    logout(context) {
        localStorage.removeItem('token')
        context.commit('setAuth', {token : null, user : null})
    }
}