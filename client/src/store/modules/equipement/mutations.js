import axios from 'axios'

export default {
    setEquipements(state, payload) {
        state.equipements = payload
    },
    deleteEq(state, payload) {
        axios.delete(`http://localhost:3000/api/delete-equipement/${payload}`)
          .then(res => console.log(res.data))
          .catch(err => console.log(err))
    }
}