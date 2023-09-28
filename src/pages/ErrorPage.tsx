import {useRouteError} from "react-router-dom"
import {Box} from '@mui/material'

export default function ErrorPage() {
    const error:any = useRouteError()

    return (
        <Box sx={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
               <i>Page {error.statusText || error.message}</i>
            </p>
        </Box>
    )
}