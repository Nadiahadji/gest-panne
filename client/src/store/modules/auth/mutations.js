import axios from 'axios'
export default {
    setAuth(state, payload) {
        if(payload.error) {
            state.error = payload.error
        }else {
            state.token = payload.token
            state.user = payload.user
        }
    }
}