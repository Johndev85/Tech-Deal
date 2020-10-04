import { BrowserRouter as Router } from "react-router-dom"
import NotRegister from '../pages/notRegister'
import UserSigned from '../pages/userSigned'
import Context from '../utils/Context'


export default function PrivatesRoutes () {

    return (

        <Router>
            <Context.Consumer>
            {
                ({isAuth}) =>
                isAuth ? <Router>
                    <UserSigned path='/' />
                </Router> :
                <Router>
                    <NotRegister path='/' />
                </Router>
            }
            </Context.Consumer>

        </Router>

    )
}