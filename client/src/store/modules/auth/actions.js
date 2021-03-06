import axios from 'axios'

export default {
    async login(context, payload) {
        const email = payload.email
        const password = payload.password
        try {
            const response = await axios.post("http://localhost:3000/api/login", {email : email, password : password})
            const token = response.data.token
            const id = response.data.id
            localStorage.setItem('token', token)
            localStorage.setItem('userId', id)
            context.commit('setAuth', {token : {token, id}}) 
        }catch(err) {
            context.commit('setAuth', {error : "verifier botre email ou mot de passe sinon contactew votre admin"}) 
            console.log("verifier botre email ou mot de passe sinon contactew votre admin")
        }
        
    
    },
    async setAuth(context, payload) {
        const response = await axios.get(`http://localhost:3000/api/user/${payload}`)
            //.then((res) => {
                const user = response.data
                context.commit("setAuth", {user : user})
            //})
            //.catch((err) => console.log(err))
    },
    logout(context) {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        context.commit('setAuth', {token : null, user : null})
    }
}