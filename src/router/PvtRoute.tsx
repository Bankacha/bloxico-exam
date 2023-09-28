import {Navigate, useLocation} from 'react-router-dom'
import Loader from '../components/shared/Loader'

const PrivateRoute = ({children}: { children: JSX.Element}) => {
    const location = useLocation()
    const isLoggedIn = true   //TODO SETUP LOGIN STATUS

    if (!isLoggedIn) {
        return <Navigate to="/login" state={{from: location}}/>
    }

    if (false) {  //TODO DOK CEKA TOKEN
        return (
            <Loader/>
        )
    }

    return children
}

export default PrivateRoute
