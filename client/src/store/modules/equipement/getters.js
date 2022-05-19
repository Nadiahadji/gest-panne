
export default {
    getEquipements(state) {
        const e = state.equipements
        return e.rows
    },
    totalEq(state) {
        const e = state.equipements
        return e.count
    }
}