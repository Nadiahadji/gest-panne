import { createStore } from 'vuex'
import site from './modules/site/index'
import auth from './modules/auth/index'
import users from './modules/users/index'
import equipements from './modules/equipement/index'
import trouble from './modules/trouble/index'
import job from './modules/job/index'
import notification from './modules/notification/index'

const store = createStore({
    modules: {
        site,
        auth,
        users,
        equipements,
        trouble,
        job,
        notification
    }
})

export default store;