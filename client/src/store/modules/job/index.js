
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
    state() {
        return {
            jobs : []
        }
    },
    mutations,
    actions,
    getters
}