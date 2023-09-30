import {Box, CircularProgress} from '@mui/material'

const Loader = () => (
    <Box sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <CircularProgress/>
    </Box>
)
export default Loader