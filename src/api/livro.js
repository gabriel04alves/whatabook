import axios from 'axios'

const livros = axios.create({
    baseURL: 'https://whatabook-django-teste.up.railway.app'
});

export default livros