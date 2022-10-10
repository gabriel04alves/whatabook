import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import {
    auth
} from './auth/index.js'

Vue.use(Vuex)

const vuexLocal = new VuexPersist({
    storage: window.localStorage,
    key: 'whatabook-django-test'
})

const modules = {
    auth
}

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules,
    plugins: [vuexLocal.plugin]
})