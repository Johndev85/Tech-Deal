import http from '../utils/http-common'

const getProducts = keyword => {
    return http.get(`/search?query=${keyword}`)
}

const randomProducts = () => {
    return http.get(`/recommendations`)
}


const register = user => {
    return http.post('/register', user)
}

const login = login => {
    return http.post(`/login`, login)
}

const updateUser = (id, user) => {
    return http.put(`/users/${id}`, user)
}



export default {
    getProducts,
    randomProducts,
    register,
    login,
    updateUser,
}