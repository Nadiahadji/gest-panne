import axios from 'axios'

export default {
    async setNotes(state, payload) {
        state.notes = await payload
    }
}