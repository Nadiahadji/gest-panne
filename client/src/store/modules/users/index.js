import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
    state() {
        return {
            users : [],
            count : 0
        }
    },
    mutations,
    actions,
    getters
}
