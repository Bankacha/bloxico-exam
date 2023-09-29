import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import {useSDK} from '@metamask/sdk-react'
import {useNavigate} from 'react-router'
import { useSelector} from 'react-redux'
import {logInUser, logOutUser} from '../store/slices/User'
import {userLoggedIn} from '../store/selectors'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import {useAppDispatch} from '../store'

const Navigation = () => {
    const dispatch = useAppDispatch()
    const isUserLoggedIn = useSelector(userLoggedIn)
    const {sdk} = useSDK()
    const navigate = useNavigate()
    const login = () => dispatch(logInUser())
    const logout = () => dispatch(logOutUser())

    const connect = async () => {
        try {
            const accounts = await sdk?.connect()
            if (!!accounts) {
                login()
                navigate('/')
            }
        } catch (err) {
            console.warn(`failed to connect..`, err)
        }
    }

    const disconnect = async () => {
        logout()
        navigate('/')
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    {
                        isUserLoggedIn ? (
                            <Box sx={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{mr: 2}}
                                    onClick={() => navigate('/profile')}
                                >
                                    <PermIdentityIcon fontSize={'large'}/>
                                </IconButton>
                                <Button  variant={'outlined'} onClick={disconnect} color="inherit">Disconnect Wallet</Button>
                            </Box>
                        ) : (
                            <Button sx={{width: '190px'}} variant={'outlined'} onClick={connect} color="inherit">Connect Wallet</Button>
                        )
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Navigation