import axios from 'axios'

export default axios.create({
    baseURL: 'https://backend.infomega.biz/',
    headers:{
        'Content-type': 'application/json'
    }

})
