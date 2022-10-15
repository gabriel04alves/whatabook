import axios from 'axios'
import livros from '@/api/livro'

export default class AuthApi {
    async login(user) {
        try {
            const { data } = await axios.post('/token/', user)
            livros.defaults.headers.common['Authorization'] = 'Bearer ' + data.access
            console.log(livros)
            return Promise.resolve(data)
        } catch(e) {
            return Promise.reject(e)
        }
    }
}