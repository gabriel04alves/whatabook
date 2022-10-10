import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = 'http://localhost:8000'

axios.interceptors.request.use( (config) =>{
    const access = store.state.auth.user.access
    if (access) {
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})
