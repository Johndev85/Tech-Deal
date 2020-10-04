import axios from 'axios'

export default axios.create({
    baseURL: 'https://backend.techdeal.vercel.app:4000/',
    headers:{
        'Content-type': 'application/json'
    }

})
