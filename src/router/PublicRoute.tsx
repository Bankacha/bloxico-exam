import { Navigate, useLocation } from 'react-router'

export const PublicRoute = ({ children }: { children: JSX.Element }) => {
    const location = useLocation()

    const isLoggedIn = true  //TODO SETUP LOGIN STATUS

    const home = '/'
    if (isLoggedIn) {
        return <Navigate to={home} state={{ from: location }} />
    }

    return children
}
