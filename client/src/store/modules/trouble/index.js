import { createStore } from 'vuex'
import mutations from '@/store/modules/site/mutations'
import actions from '@/store/modules/site/actions'
import getters from '@/store/modules/site/getters'

const store = createStore({
    state() {
        return {}
    },
    mutations,
    actions,
    getters
})

export default store