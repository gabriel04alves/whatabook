import axios from 'axios'
export default class LivroApi {
    async getLivros() {
        try {
            const { data } = await axios.get('/api/editora/')
            return Promise.resolve(data)
        } catch(e) {
            return Promise.reject(e)
        }
    }
}