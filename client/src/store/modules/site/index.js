import mutations from '@/store/modules/site/mutations'
import actions from '@/store/modules/site/actions'
import getters from '@/store/modules/site/getters'

export default {
    state() {
        return {
            sites : []
        }
    },
    mutations,
    actions,
    getters
}