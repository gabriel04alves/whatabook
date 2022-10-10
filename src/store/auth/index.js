import AuthApi from '@/api/auth'
const authApi = new AuthApi()
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
        async login({commit}, user) {
            try {
                const userData = await authApi.login(user)
                commit('setLoginInfo', userData)
                return Promise.resolve(userData)
            } catch (e) {
                return Promise.reject(e)
            }
        },
        logout({
            commit
        }) {
            commit('setLogout')
        }
    }
}