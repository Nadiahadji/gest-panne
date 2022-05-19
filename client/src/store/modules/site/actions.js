import axios from 'axios'

export default {

    loadSites(context, payload) {
        const page = payload.page
        const filter = payload.filter

        axios.get(`http://localhost:3000/api/sites`, {params : {
                    page : page,
                    site : filter
                }
            })
            .then((res) => {
                console.log(res.data)
                context.commit("setSite", res.data)
            })
            .catch(err => {
                const error = new Error(err || "Probleme de recuperation des donnees")
                throw error
            })
    },
    deleteSite(context, payload) {
        context.commit("deleteSite", payload)
    }
}