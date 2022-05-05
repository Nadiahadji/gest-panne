
export default {
    setAuth(state, payload) {
        state.token = payload.token
        state.user = payload.user
    }
}