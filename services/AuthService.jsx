const USER_KEY = "user"
const TOKEN_KEY = "jwt"

const login = (token) => {
    sessionStorage.setItem(TOKEN_KEY, token)
}

const logout = () => {
    sessionStorage.clear()
}

const getUser = () => {
    if (process.browser) {
        return JSON.parse(sessionStorage.getItem(USER_KEY))
    }
}

const getToken = () => {
    if (process.browser) {
        return sessionStorage.getItem(TOKEN_KEY)
    }
}

export default {
    login,
    logout,
    getUser,
    getToken,
}
