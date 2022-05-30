import axios from 'axios'

export default {

    async loadSites(context, payload) {
        const page = payload.page
        const filter = payload.filter

        const res = await axios.get(`http://localhost:3000/api/sites`, {params : {
                    page : page,
                    site : filter
                }
            })
            
        context.commit("setSite", res.data)
            
    }
}