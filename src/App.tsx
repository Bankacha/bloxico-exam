import React from 'react'
import {RouterProvider} from 'react-router-dom'
import Router from './Router'
import {Box} from '@mui/material'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
        <Box>
            <RouterProvider router={Router}/>
            <ToastContainer
                position={'top-center'}
                hideProgressBar={true}
                toastStyle={{backgroundColor: '#DDEEE0'}}
            />
        </Box>
    )
}

export default App
