import axios from 'axios'

export default {
    async setEquipements(state, payload) {
        state.equipements = await payload
    },
    deleteEq(state, payload) {
        axios.delete(`http://localhost:3000/api/delete-equipement/${payload}`)
          .then(res => console.log(res.data))
          .catch(err => console.log(err))
    }
}