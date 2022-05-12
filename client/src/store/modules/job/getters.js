

export default {
    getJobs(state) {
        const jobs = state.jobs
        return jobs.rows
    }
}