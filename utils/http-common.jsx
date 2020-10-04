import axios from 'axios'

export default axios.create({
    baseURL: 'https://3.130.55.84:4000/',
    headers:{
        'Content-type': 'application/json'
    }

})
