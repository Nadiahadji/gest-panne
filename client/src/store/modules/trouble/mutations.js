import axios from 'axios'

export default {
    setTroubles(state, payload) {
        state.troubles = payload
    },
    deleteTrouble(state, payload) {
        axios.delete(`http://localhost:3000/api/delete-trouble/${payload}`)
          .then(res => console.log(res.data))
          .catch(err => console.log(err))
    }
}