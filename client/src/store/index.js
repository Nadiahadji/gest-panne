import { createStore } from 'vuex'
import site from './modules/site/index'
import auth from './modules/auth/index'

const store = createStore({
    modules: {
        site,
        auth
    }
})

export default store;