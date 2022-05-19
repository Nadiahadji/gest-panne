

export default {
    getJobs(state) {
        const jobs = state.jobs
        return jobs.rows
    },
    totalJobs (state) {
        const count = state.jobs
        return count.count
    }
}