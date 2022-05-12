import axios from 'axios'

export default {
    setJobs(state, payload) {
        state.jobs = payload
    },
    deleteJob(state, payload) {
        axios.delete(`http://localhost:3000/api/delete-job/${payload}`)
          .then(res => console.log(res.data))
          .catch(err => console.log(err))
    }
}