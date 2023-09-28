import { Navigate, useLocation } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'

const PrivateRoute = ({
                          children,
                      }: {
    children: JSX.Element;
}) => {
    const location = useLocation()
    const isLoggedIn = true   //TODO SETUP LOGIN STATUS

    if (!isLoggedIn) {
        return <Navigate to='/login' state={{ from: location }} />
    }

    if (false) {  //TODO DOK CEKA TOKEN
        return (
            <Box sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <CircularProgress />
            </Box>
        )
    }

    return children
}

export default PrivateRoute
