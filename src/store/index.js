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
                    biografiaAutor: "Stephen William Hawking foi um físico teórico e cosmólogo britânico, reconhecido internacionalmente por sua contribuição à ciência, sendo um dos mais renomados cientistas do século.",
                    dtnascAutor: new Date("1942,01,08").getDate().toLocaleDateString,
                    dtfalecimentoAutor: new Date("2018,03,14").getDate().toLocaleDateString,
                    localAutor: "Santa Catarina, Brasil",
                    obras: "", 
                },
                {
                    nomeAutor: "George Orwell",
                    biografiaAutor: "Eric Arthur Blair, mais conhecido pelo pseudónimo George Orwell, foi um escritor, jornalista e ensaísta político inglês, nascido na Índia Britânica.",
                    dtnascAutor: new Date("1903,06,25").getDate().toLocaleDateString,
                    dtfalecimentoAutor: new Date("1950,01,21").getDate().toLocaleDateString,
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