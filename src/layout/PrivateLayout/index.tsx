import { FC, ReactNode } from 'react'
import {Box} from '@mui/material'
import {Navigate, Outlet} from 'react-router-dom'
import Navigation from '../Navigation'
import {useSelector} from 'react-redux'
import {userLoggedIn} from '../../store/selectors'

interface PrivateLayoutProps {
    children?: ReactNode;
}

const PrivateLayout: FC<PrivateLayoutProps> = () => {
    const isUserLoggedIn = useSelector(userLoggedIn)

    if (!isUserLoggedIn) {
        return <Navigate to="/" />
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
            <Navigation/>
            <Box sx={{width: '100%'}}>
                <Outlet />
            </Box>
        </Box>
    )
}

export default PrivateLayout

