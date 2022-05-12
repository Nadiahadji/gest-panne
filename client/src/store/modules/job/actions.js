import axios from 'axios'

export default {
    loadJobs(context, payload) {
        const page = payload.page
        const filter = payload.filter

        axios.get(`http://localhost:3000/api/jobs`, {params : {
                    page,
                    filter
                }
            })
            .then(res => {
                console.log(res.data)
                context.commit("setJobs", res.data)
            })
            .catch(err => {
                const error = new Error(err || "Probleme de recuperation des donnees")
                throw error
            })
    },
    deleteJob(context, payload) {
        context.commit("deleteJob", payload)
    }
}