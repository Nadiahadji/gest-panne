import axios from 'axios'

export default {
    async setSite(state, payload) {
        state.sites = await payload
    }
}