import axios from 'axios'

export default {
    setSite(state, payload) {
        state.sites = payload
    },
    deleteSite(state, payload) {
        axios.delete(`http://localhost:3000/api/delete-site/${payload}`)
          .then(res => console.log(res.data))
          .catch(err => console.log(err))
    }
}