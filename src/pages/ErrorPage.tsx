import {Box, Button} from '@mui/material'
import React from 'react'

const ErrorPage: React.FC<{text: string, retry?: () => void}> = ({ text, retry}) => {

    return (
        <Box sx={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1>Oops!</h1>
            <p>{text}</p>
            <Button onClick={() => retry && retry()}>Try again</Button>
        </Box>
    )
}

export default ErrorPage