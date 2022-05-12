
export default {
    getUsers(state) {
        const troubles = state.users
        return troubles.rows
    }
}