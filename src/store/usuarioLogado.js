import axios from "axios"
export const usuarioLogado = {
    namespaced: true,
    state:{
        usuarioLogado: {}
    },
    mutations:{
        setUsuario(state, user){
            state.usuarioLogado = user
        }
    },
    actions:{
        async getDadosUser({commit}){
            const {data} = await axios.get('/api/detail-user/')
            const [usuario] = data 
            commit('setUsuario', usuario)
        },
        async limparDadosUser({commit}){
            commit('setUsuario', {})
        }
    }
}