import NotRegister from "./notregister"
import UserSigned from "./usersigned"

const HomePage = () => {
    function Greeting(props) {
        const isAuth = props.isAuth
        if (isAuth) {
            return <UserSigned />
        }
        return <NotRegister />
    }

    return <Greeting isAuth={false} />
}

export default HomePage
