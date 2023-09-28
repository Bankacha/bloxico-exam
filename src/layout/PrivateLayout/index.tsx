import { FC, ReactNode } from 'react'
import {Box} from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation'

interface PrivateLayoutProps {
    children?: ReactNode;
}

const PrivateLayout: FC<PrivateLayoutProps> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
            <Navigation loggedIn={true} />
            <Box sx={{width: '100%'}}>
                <Outlet />
            </Box>
        </Box>
    )
}

export default PrivateLayout

