import {useEffect, useState} from 'react'
import W3, {Web3} from 'web3'
import {Box, Button, Card, CardActions, CardContent, Typography} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useNavigate} from 'react-router'

const ProfilePage = () => {
    const navigate = useNavigate()
    const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/b36defe59678478f863a9d7bab15a444'))
    const [balance, setBalance] = useState<string>('')
    const {ethereum} = window
    const currentAddress = ethereum?.selectedAddress
    const chainId = ethereum?.chainId

    useEffect(() => {
        web3.eth.getBalance('0x0f534d59919ed7fd179875fe9a57f7dac2b38588' as string).then((res) => {
            setBalance(W3.utils.fromWei(res, 'ether'))
        })
    }, [web3.eth])

    const copyToClipboard = (copyText:string) => {
        navigator.clipboard.writeText(copyText)
    }

    return <Box sx={{width: '100%', height: '80vh', boxSizing: 'border-box', p: 2, pt: {xs: 4, md: 12}}}>
        <Card sx={{maxWidth: '600px', margin: 'auto', boxShadow: '1px 2px 11px 0px rgba(0,0,0,0.57)',}}>
            <Box sx={{fontSize: 18, background: '#69A297', height: '40px', textAlign: 'center', pt: 2}}>
                <Typography sx={{fontSize: 18, color: '#FFFFFF', fontWeight: 600, letterSpacing: '2px'}}>
                    YOUR WALLET INFO
                </Typography>
            </Box>
            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', rowGap: 4, pt: 4}}>
                <Box sx={{color: '#7df175', display: 'flex', justifyContent: 'flex-end', columnGap: 1, alignItems: 'center', textAlign: 'right', width: '100%'}}>
                    <Typography variant="body1" component="div">
                        Connected
                    </Typography>
                    <CheckCircleIcon/>
                </Box>
                <Box>
                    <Typography variant="h5" component="div">
                        Balance:
                    </Typography>
                    <Typography variant="h5" component="div" color="text.secondary">
                        {balance} ETH
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" component="div">
                        Wallet address:
                    </Typography>
                    <Typography sx={{fontSize: {xs: '14px', md: '24px'}}} color="text.secondary">
                        {currentAddress}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" component="div">
                        Chain ID:
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {chainId}
                    </Typography>
                </Box>
            </CardContent>
            <hr/>
            <CardActions sx={{display: 'flex', justifyContent: 'space-between', mb: 1}}>
                <Button onClick={() => {navigate('/')}} variant={'outlined'} size="small">Back</Button>
                <Button onClick={() => copyToClipboard(currentAddress as string)} variant={'contained'} size="small">Copy Address</Button>
            </CardActions>
        </Card>
    </Box>
}
export default ProfilePage