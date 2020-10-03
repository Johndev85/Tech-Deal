import http from '../utils/http-common'

const getAll = () => {
    return http.get('/users')
}

const get = id => {
    return http.get(`/users/${id}`)
}

const create = data => {
    return http.post('/users', data)
}

const update = (id, data) => {
    return http.put(`/users/${id}`, data)
}

const remove = id => {
    return http.delete(`/users/${id}`)
}

const findProducts = keyword => {
    return http.get(`/search?query${keyword}`)
}

export default {
    getAll,
    get,
    create,
    update,
    remove,
    findProducts
}