import axios from 'axios'

export default {
    setUsers(context, payload) {
        const page = payload.page
        const filter = payload.filter
        axios.get('http://localhost:3000/api/users', {
            params : {
                page,
                filter
            }
        })
            .then(res => {
                context.commit('setUsers', res.data)
            })
            .catch(err => console.log(err))
    }
}