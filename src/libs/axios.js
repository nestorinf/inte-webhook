import axios from 'axios'

const request = (url) => axios.create({
    baseURL: url,
    timeout: 10000,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})
export default request
