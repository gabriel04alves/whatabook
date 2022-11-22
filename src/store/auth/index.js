import AuthService from '@/api/auth'
import { cleanToken, tokenChange } from '@/plugins/axios'
export const auth = {
    namespaced: true,
    state: {
        loggedIn: false,
        user: {}
    },
    mutations: {
        setLoginInfo(state, user) {
            state.user = user
            state.loggedIn = true
        },
        setLogout(state) {
            state.user = {}
            state.loggedIn = false
        }
    },
    actions: {
        async login({commit, dispatch}, user) {
            try{
                const userData = await AuthService.login(user)
                commit('setLoginInfo', userData)
                tokenChange(userData.access)
                dispatch('usuarioLogado/getDadosUser', {}, {root: true})
                return Promise.resolve(userData)
            }
            catch (e){
                commit('setLogout')
                cleanToken()
                dispatch('usuarioLogado/limparDadosUser', {}, {root: true})
                return Promise.reject(e)
            }
        },
        logout({commit, dispatch}) {
            commit('setLogout')
            dispatch('usuarioLogado/limparDadosUser', {}, {root: true})
            cleanToken()
        }
    }
}