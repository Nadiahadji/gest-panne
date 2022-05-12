import axios from 'axios'

export default {
    loadTroubles(context, payload) {
        const page = payload.page
        const filter = payload.filter

        axios.get(`http://localhost:3000/api/troubles`, {params : {
                    page,
                    filter
                }
            })
            .then(res => {
                console.log(res.data)
                context.commit("setTroubles", res.data)
            })
            .catch(err => {
                const error = new Error(err || "Probleme de recuperation des donnees")
                throw error
            })
    },
    deleteTrouble(context, payload) {
        context.commit("deleteTrouble", payload)
    }
}