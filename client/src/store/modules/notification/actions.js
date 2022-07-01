import axios from 'axios'

export default {

    async loadNotes(context) {
        
        const res = await axios.get(`http://localhost:3000/api/allNotifications`)
            
        context.commit("setNotes", res.data)
            
    }
}