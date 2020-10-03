import axios from 'axios'

export default axios.create({
    baseURL: 'http://3.130.55.84:4000/',
    headers:{
        'Content-type': 'application/json'
    }

})