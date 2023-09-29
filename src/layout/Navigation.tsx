import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import {useSDK} from '@metamask/sdk-react'
import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {setUserLoggedIn} from '../store/slices/User'
import {userLoggedIn} from '../store/selectors'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'

const Navigation = () => {
    const dispatch = useDispatch()
    const isUserLoggedIn = useSelector(userLoggedIn)
    const {sdk, connected, connecting, provider, chainId, account} = useSDK()
    const navigate = useNavigate()

    const {ethereum} = window
    // console.log('ethereum', ethereum)
    // console.log('provider', provider)

    const connect = async () => {
        try {
            const accounts = await sdk?.connect()
            if (!!accounts) {
                dispatch(setUserLoggedIn(true))
                navigate('/')
            }
        } catch (err) {
            console.warn(`failed to connect..`, err)
        }
    }

    const disconnect = async () => {
        dispatch(setUserLoggedIn(false))
        navigate('/')
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    {
                        isUserLoggedIn ? (
                            <>
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
                                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                    Profile
                                </Typography>
                                <Button onClick={disconnect} color="inherit">Disconnect Wallet</Button>
                            </>
                        ) : (
                            <Button onClick={connect} color="inherit">Connect Wallet</Button>
                        )
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Navigation