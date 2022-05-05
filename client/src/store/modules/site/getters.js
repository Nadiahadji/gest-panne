export default {
    sites(state) {
        const sites = state.sites
        return sites.rows
    },
    totalSites(state){
        const total = state.sites
        return total.count
    }
}