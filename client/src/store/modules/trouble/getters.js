

export default {
    getTroubles(state) {
        const troubles = state.troubles
        return troubles.rows
    },
    totalTroubles(state) {
        const count = state.troubles
        return count.count
    }
}