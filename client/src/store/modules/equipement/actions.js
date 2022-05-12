import axios from 'axios'

export default {
    loadEquipements(context, payload) {
        const page = payload.page
        const filter = payload.filter

        axios.get(`http://localhost:3000/api/equipements`, {params : {
                    page : page,
                    filter : filter
                }
            })
            .then(res => {
                console.log(res.data)
                context.commit("setEquipements", res.data)
            })
            .catch(err => {
                const error = new Error(err || "Probleme de recuperation des donnees")
                throw error
            })
    },
    deleteEq(context, payload) {
        context.commit("deleteEq", payload)
    }
}