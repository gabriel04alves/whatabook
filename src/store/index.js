import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import {
    auth
} from './auth'

Vue.use(Vuex)

const vuexLocal = new VuexPersist({
    storage: window.localStorage,
    key: 'whatabook-django-test'
})

const modules = {
    auth
}

export default new Vuex.Store({
    state: {
        autores: [
                {
                    nomeAutor: "Stephen Hawking",
                    biografiaAutor: "teste teste teste teste teste ",
                    dtnascAutor: new Date("2000,10,10"),
                    dtfalecimentoAutor: new Date(),
                    localAutor: "Santa Catarina, Brasil",
                    obras: "",
                },
                {
                    nomeAutor: "George Orwell",
                    dtnascAutor: new Date('1903,06,25'),
                    dtfalecimentoAutor: new Date('1950,01,21'),
                    localAutor: "Londres, UK",
                    obras: "",
                },
            ],
    },
    mutations: {},
    actions: {},
    modules,
    plugins: [vuexLocal.plugin]
})