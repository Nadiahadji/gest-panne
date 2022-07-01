import mutations from '@/store/modules/notification/mutations'
import actions from '@/store/modules/notification/actions'
import getters from '@/store/modules/notification/getters'

export default {
    state() {
        return {
            notes : []
        }
    },
    mutations,
    actions,
    getters
}