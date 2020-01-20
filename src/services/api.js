import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.64.60:3333'
})

export default api