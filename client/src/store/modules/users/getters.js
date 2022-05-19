
export default {
    getUsers(state) {
        const users = state.users
        return users.rows
    },
    totalUsers(state) {
        const users = state.users
        return users.count
    }
}