import axios from 'axios'
export default class AuthApi {
    async login(user) {
        try {
            const { data } = await axios.post('/token/', user)
            return Promise.resolve(data)
        } catch(e) {
            return Promise.reject(e)
        }
    }
}